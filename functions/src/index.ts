import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import * as nodemailer from "nodemailer";

// ─── Secrets (set via `firebase functions:secrets:set <NAME>`) ───
const smtpHost = defineSecret("SMTP_HOST");
const smtpPort = defineSecret("SMTP_PORT");
const smtpUser = defineSecret("SMTP_USER");
const smtpPass = defineSecret("SMTP_PASS");
const notificationReceiver = defineSecret("NOTIFICATION_RECEIVER");

// ─── Helper: create transporter & send mail ───
async function sendNotification(subject: string, htmlBody: string) {
  const transporter = nodemailer.createTransport({
    host: smtpHost.value(),
    port: parseInt(smtpPort.value(), 10),
    secure: true, // true for port 465
    auth: {
      user: smtpUser.value(),
      pass: smtpPass.value(),
    },
  });

  await transporter.sendMail({
    from: `"Diamo Notifications" <${smtpUser.value()}>`,
    to: notificationReceiver.value(),
    subject,
    html: htmlBody,
  });
}

// ─── Helper: format a date nicely ───
function formatDate(date: Date): string {
  return date.toLocaleString("de-DE", {
    timeZone: "Europe/Berlin",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── Shared HTML template ───
function buildEmailHtml(
  title: string,
  emoji: string,
  fields: { label: string; value: string }[]
): string {
  const fieldRows = fields
    .map(
      (f) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;color:#002060;white-space:nowrap;vertical-align:top;">${f.label}</td>
        <td style="padding:8px 12px;color:#333;">${f.value}</td>
      </tr>`
    )
    .join("");

  return `
  <!DOCTYPE html>
  <html lang="de">
  <head><meta charset="UTF-8"></head>
  <body style="margin:0;padding:0;background:#f4f2ef;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2ef;padding:40px 20px;">
      <tr><td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,32,96,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#002060 0%,#1a3a7a 50%,#9B8BCB 100%);padding:32px 24px;text-align:center;">
              <div style="font-size:36px;margin-bottom:8px;">${emoji}</div>
              <h1 style="margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">${title}</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e6e1;border-radius:12px;overflow:hidden;">
                ${fieldRows}
              </table>
              <p style="margin:24px 0 0;font-size:13px;color:#999;text-align:center;">
                Diese E-Mail wurde automatisch von diamo.club gesendet.
              </p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>`;
}

// ═══════════════════════════════════════════════════
// 1. WAITLIST — neue Wartelisten-Einträge
// ═══════════════════════════════════════════════════
export const onWaitlistEntry = onDocumentCreated(
  {
    document: "waitlist/{docId}",
    secrets: [smtpHost, smtpPort, smtpUser, smtpPass, notificationReceiver],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const email = data.email || "—";
    const timestamp = data.createdAt?.toDate
      ? formatDate(data.createdAt.toDate())
      : formatDate(new Date());

    const html = buildEmailHtml("Neue Wartelisten-Anmeldung 🎉", "📋", [
      { label: "E-Mail", value: email },
      { label: "Quelle", value: data.source || "waitlist" },
      { label: "Zeitpunkt", value: timestamp },
    ]);

    await sendNotification(
      `🆕 Neue Wartelisten-Anmeldung: ${email}`,
      html
    );

    console.log(`✉️ Waitlist notification sent for ${email}`);
  }
);

// ═══════════════════════════════════════════════════
// 2. BETA APPLICATIONS — neue Beta-Tester-Bewerbungen
// ═══════════════════════════════════════════════════
export const onBetaApplication = onDocumentCreated(
  {
    document: "beta_applications/{docId}",
    secrets: [smtpHost, smtpPort, smtpUser, smtpPass, notificationReceiver],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const name = data.name || "—";
    const email = data.email || "—";
    const motivation = data.motivation || "— (nicht angegeben)";
    const timestamp = data.createdAt?.toDate
      ? formatDate(data.createdAt.toDate())
      : formatDate(new Date());

    const html = buildEmailHtml("Neue Beta-Tester Bewerbung 🧪", "🧪", [
      { label: "Name", value: name },
      { label: "E-Mail", value: email },
      { label: "Motivation", value: motivation },
      { label: "Zeitpunkt", value: timestamp },
    ]);

    await sendNotification(
      `🧪 Neue Beta-Bewerbung von ${name} (${email})`,
      html
    );

    console.log(`✉️ Beta application notification sent for ${email}`);
  }
);

// ═══════════════════════════════════════════════════
// 3. TEAM APPLICATIONS — neue Team-Bewerbungen
// ═══════════════════════════════════════════════════
export const onTeamApplication = onDocumentCreated(
  {
    document: "applications/{docId}",
    secrets: [smtpHost, smtpPort, smtpUser, smtpPass, notificationReceiver],
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const name = data.name || "—";
    const email = data.email || "—";
    const message = data.message || "— (keine Nachricht)";
    const timestamp = data.createdAt?.toDate
      ? formatDate(data.createdAt.toDate())
      : formatDate(new Date());

    const html = buildEmailHtml("Neue Team-Bewerbung 🚀", "💼", [
      { label: "Name", value: name },
      { label: "E-Mail", value: email },
      { label: "Nachricht", value: message },
      { label: "Zeitpunkt", value: timestamp },
    ]);

    await sendNotification(
      `💼 Neue Team-Bewerbung von ${name} (${email})`,
      html
    );

    console.log(`✉️ Team application notification sent for ${email}`);
  }
);
