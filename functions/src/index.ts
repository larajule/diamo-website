import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import * as nodemailer from "nodemailer";

// ─── Secrets (set via `firebase functions:secrets:set <NAME>`) ───
const smtpHost = defineSecret("SMTP_HOST");
const smtpPort = defineSecret("SMTP_PORT");
const smtpUser = defineSecret("SMTP_USER");
const smtpPass = defineSecret("SMTP_PASS");
const notificationReceiver = defineSecret("NOTIFICATION_RECEIVER");

// ─── Helper: create transporter ───
function createTransporter() {
  return nodemailer.createTransport({
    host: smtpHost.value(),
    port: parseInt(smtpPort.value(), 10),
    secure: true, // true for port 465
    auth: {
      user: smtpUser.value(),
      pass: smtpPass.value(),
    },
  });
}

// ─── Helper: send admin notification ───
async function sendNotification(subject: string, htmlBody: string) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"Diamo Notifications" <${smtpUser.value()}>`,
    to: notificationReceiver.value(),
    subject,
    html: htmlBody,
  });
}

// ─── Helper: send confirmation email to user ───
async function sendConfirmationToUser(
  toEmail: string,
  subject: string,
  htmlBody: string
) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"Diamo" <${smtpUser.value()}>`,
    to: toEmail,
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

// ─── Shared HTML template (admin notifications) ───
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

// ─── User confirmation email template ───
function buildUserConfirmationHtml(
  greeting: string,
  bodyText: string,
  signoff: string
): string {
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
              <div style="font-family:'Playfair Display',Georgia,serif;font-size:2.5rem;font-weight:700;color:#ffffff;letter-spacing:2px;">d.</div>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);letter-spacing:1px;text-transform:uppercase;">diamo</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 32px;">
              <h2 style="margin:0 0 20px;font-size:22px;font-weight:700;color:#002060;">${greeting}</h2>
              <div style="font-size:15px;line-height:1.8;color:#4a4a4a;">
                ${bodyText}
              </div>
              <div style="margin-top:28px;font-size:15px;line-height:1.8;color:#4a4a4a;">
                ${signoff}
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #e8e6e1;">
              <p style="margin:0;font-size:12px;color:#999;text-align:center;">
                © 2026 Diamo · <a href="https://diamo.club" style="color:#9B8BCB;text-decoration:none;">diamo.club</a>
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
// 1. WAITLIST — neue Wartelisten-Einträge & Beta-Tester
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
    const source = data.source || "waitlist";
    const isBetaTester = source === "beta_tester";
    const timestamp = data.createdAt?.toDate
      ? formatDate(data.createdAt.toDate())
      : formatDate(new Date());

    // ── Admin notification (adapted per source) ──
    const adminTitle = isBetaTester
      ? "Neue Beta-Testerin"
      : "Neue Wartelisten-Anmeldung";
    const adminEmoji = isBetaTester ? "" : "";
    const adminSubject = isBetaTester
      ? `Neue Beta-Testerin: ${email}`
      : `Neue Wartelisten-Anmeldung: ${email}`;

    const adminHtml = buildEmailHtml(adminTitle, adminEmoji, [
      { label: "E-Mail", value: email },
      { label: "Quelle", value: source },
      { label: "Zeitpunkt", value: timestamp },
    ]);

    await sendNotification(adminSubject, adminHtml);

    // ── User confirmation email (adapted per source + language) ──
    if (email && email !== "—") {
      const lang = data.language === "en" ? "en" : "de";

      if (isBetaTester) {
        const confirmHtml = buildUserConfirmationHtml(
          "Hey! 💜",
          lang === "en"
            ? `<p style="margin:0 0 16px;">Thank you for joining Diamo as a beta tester! We're thrilled to have you on board.</p>
            <p style="margin:0 0 16px;">You're now part of an exclusive group that gets to experience Diamo before everyone else. Here's what awaits you:</p>
            <ul style="margin:0 0 16px;padding-left:20px;color:#4a4a4a;">
              <li style="margin-bottom:8px;"><strong>Free access</strong> throughout the entire beta phase</li>
              <li style="margin-bottom:8px;"><strong>Direct influence</strong> on features and development</li>
              <li style="margin-bottom:8px;"><strong>Founding member perks</strong> at launch</li>
            </ul>
            <p style="margin:0;">We'll reach out to you as soon as it's time to start. Promise!</p>`
            : `<p style="margin:0 0 16px;">Danke, dass du Diamo als Beta-Testerin mitgestaltest! Wir freuen uns riesig, dass du dabei bist.</p>
            <p style="margin:0 0 16px;">Du bist jetzt Teil einer exklusiven Gruppe, die Diamo vor allen anderen erlebt. Das erwartet dich:</p>
            <ul style="margin:0 0 16px;padding-left:20px;color:#4a4a4a;">
              <li style="margin-bottom:8px;"><strong>Kostenloser Zugang</strong> während der gesamten Beta-Phase</li>
              <li style="margin-bottom:8px;"><strong>Direkter Einfluss</strong> auf Features und Entwicklung</li>
              <li style="margin-bottom:8px;"><strong>Founding-Member-Vorteile</strong> zum Launch</li>
            </ul>
            <p style="margin:0;">Wir melden uns bei dir, sobald es losgeht. Versprochen!</p>`,
          lang === "en"
            ? `Best regards,<br>Your Diamo Team`
            : `Liebe Grüße,<br>Dein Diamo-Team`
        );

        await sendConfirmationToUser(
          email,
          lang === "en"
            ? "Welcome to the Diamo Beta Program!"
            : "Willkommen im Diamo Beta-Programm!",
          confirmHtml
        );
      } else {
        const confirmHtml = buildUserConfirmationHtml(
          "Hey! 💜",
          lang === "en"
            ? `<p style="margin:0 0 16px;">Thank you for signing up for the Diamo waitlist! We're thrilled to have you on board.</p>
            <p style="margin:0 0 16px;">We're working hard to get Diamo ready for you. As soon as it's time, you'll be one of the first to know. Promise!</p>`
            : `<p style="margin:0 0 16px;">Vielen Dank, dass du dich für die Diamo-Warteliste angemeldet hast! Wir freuen uns riesig, dass du dabei bist.</p>
            <p style="margin:0 0 16px;">Wir arbeiten gerade mit Hochdruck daran, Diamo für dich fertig zu stellen. Sobald es losgeht, bist du eine der Ersten, die es erfährt. Versprochen!</p>`,
          lang === "en"
            ? `Best regards,<br>Your Diamo Team`
            : `Liebe Grüße,<br>Dein Diamo-Team`
        );

        await sendConfirmationToUser(
          email,
          lang === "en"
            ? "Welcome to the Diamo Waitlist!"
            : "Willkommen auf der Diamo-Warteliste!",
          confirmHtml
        );
      }
    }

    console.log(`${isBetaTester ? "Beta" : "Waitlist"} notification + confirmation sent for ${email}`);
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

    // Admin notification
    const html = buildEmailHtml("Neue Beta-Tester Bewerbung", "", [
      { label: "Name", value: name },
      { label: "E-Mail", value: email },
      { label: "Motivation", value: motivation },
      { label: "Zeitpunkt", value: timestamp },
    ]);

    await sendNotification(
      `Neue Beta-Bewerbung von ${name} (${email})`,
      html
    );

    // User confirmation email
    if (email && email !== "—") {
      const lang = data.language === "en" ? "en" : "de";
      const displayName = name !== "—" ? name : (lang === "en" ? "there" : "du");
      const confirmHtml = buildUserConfirmationHtml(
        `Hey ${displayName}! 💜`,
        lang === "en"
          ? `<p style="margin:0 0 16px;">Thank you for applying as a beta tester! We're very excited about your interest in Diamo.</p>
          <p style="margin:0 0 16px;">We'll review your application and get back to you soon. As a beta tester, you'll get free access, shape features with your feedback, and earn founding member perks at launch.</p>
          <p style="margin:0;">We can't wait to have you on board!</p>`
          : `<p style="margin:0 0 16px;">Vielen Dank für deine Bewerbung als Beta-Testerin! Wir freuen uns sehr über dein Interesse an Diamo.</p>
          <p style="margin:0 0 16px;">Wir schauen uns deine Bewerbung an und melden uns bald bei dir. Als Beta-Testerin bekommst du kostenlosen Zugang, kannst Features mitgestalten und sicherst dir Founding-Member-Vorteile zum Launch.</p>
          <p style="margin:0;">Wir können es kaum erwarten, dich an Bord zu haben!</p>`,
        lang === "en"
          ? `Best regards,<br>Your Diamo Team`
          : `Liebe Grüße,<br>Dein Diamo-Team`
      );

      await sendConfirmationToUser(
        email,
        lang === "en"
          ? "Your Beta Application at Diamo"
          : "Deine Beta-Bewerbung bei Diamo",
        confirmHtml
      );
    }

    console.log(`Beta application notification + confirmation sent for ${email}`);
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

    // Admin notification
    const html = buildEmailHtml("Neue Team-Bewerbung", "", [
      { label: "Name", value: name },
      { label: "E-Mail", value: email },
      { label: "Nachricht", value: message },
      { label: "Zeitpunkt", value: timestamp },
    ]);

    await sendNotification(
      `Neue Team-Bewerbung von ${name} (${email})`,
      html
    );

    // User confirmation email
    if (email && email !== "—") {
      const lang = data.language === "en" ? "en" : "de";
      const displayName = name !== "—" ? name : (lang === "en" ? "there" : "du");
      const confirmHtml = buildUserConfirmationHtml(
        `Hey ${displayName}! 💜`,
        lang === "en"
          ? `<p style="margin:0 0 16px;">Thank you for applying to Diamo! We're excited that you want to be part of our team.</p>
          <p style="margin:0;">We'll carefully review your application and get back to you within a few days.</p>`
          : `<p style="margin:0 0 16px;">Vielen Dank für deine Bewerbung bei Diamo! Wir freuen uns, dass du Teil unseres Teams werden möchtest.</p>
          <p style="margin:0;">Wir schauen uns deine Bewerbung sorgfältig an und melden uns innerhalb weniger Tage bei dir.</p>`,
        lang === "en"
          ? `Best regards,<br>Your Diamo Team`
          : `Liebe Grüße,<br>Dein Diamo-Team`
      );

      await sendConfirmationToUser(
        email,
        lang === "en"
          ? "Your Application at Diamo"
          : "Deine Bewerbung bei Diamo",
        confirmHtml
      );
    }

    console.log(`Team application notification + confirmation sent for ${email}`);
  }
);
