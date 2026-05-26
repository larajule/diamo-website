<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $formType = htmlspecialchars($_POST['form_type'] ?? 'unbekannt');
    $name = htmlspecialchars($_POST['name'] ?? 'Nicht angegeben');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message'] ?? 'Keine Nachricht');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Ungültige E-Mail-Adresse."]);
        exit;
    }

    // E-Mail Einstellungen
    $to = "larabullemer@gmail.com"; 
    $subject = "Neue Anmeldung Diamo: " . ucfirst($formType);
    $body = "Du hast eine neue Anmeldung über das Formular '$formType' erhalten.\n\n" .
            "Name: $name\n" .
            "E-Mail: $email\n" .
            "Nachricht/Motivation:\n$message\n";
            
    $headers = "From: noreply@diamo.club\r\n" .
               "Reply-To: $email\r\n";

    $mailSent = mail($to, $subject, $body, $headers);

    // CSV Speicherung
    $file = 'anmeldungen.csv';
    $date = date('Y-m-d H:i:s');
    $csvData = array($date, $formType, $name, $email, $message);

    $fp = fopen($file, 'a');
    if ($fp) {
        fputcsv($fp, $csvData);
        fclose($fp);
    }

    if ($mailSent) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Erfolgreich eingetragen!"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Daten gespeichert, E-Mail-Versand prüfen."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Nur POST erlaubt."]);
}
?>
