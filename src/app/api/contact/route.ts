import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "frank.f@hudsonvalleycontractinggroup.com";
const FROM_EMAIL = "noreply@hudsonvalleycontractinggroup.com";

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#374151;background:#f9fafb;width:160px;vertical-align:top;border-bottom:1px solid #e5e7eb;">${label}</td>
      <td style="padding:8px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${value}</td>
    </tr>`;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { formType, ...data } = body;

  const isQuote = formType === "quote";

  const subject = isQuote
    ? `New Quote Request — ${data.firstName} ${data.lastName} (${data.service || "General"})`
    : `New Contact Form — ${data.firstName} ${data.lastName} (${data.projectType || "General"})`;

  const rows = isQuote
    ? [
        row("Name", `${data.firstName} ${data.lastName}`),
        row("Phone", data.phone),
        row("Email", data.email),
        row("Zip Code", data.zip),
        row("Service", data.service),
      ]
    : [
        row("Name", `${data.firstName} ${data.lastName}`),
        row("Phone", data.phone),
        row("Email", data.email),
        row("City / Town", data.city),
        row("Project Type", data.projectType),
        row("Budget", data.budget),
        row("Best Time to Call", data.callTime),
        row("Financing Interest", data.financing ? "Yes" : "No"),
        row("Project Description", data.description),
      ];

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#1e3a5f;padding:28px 32px;border-radius:8px 8px 0 0;">
            <p style="margin:0 0 2px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.5);">Hudson Valley Contracting Group</p>
            <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">${isQuote ? "New Quote Request" : "New Contact Form Submission"}</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
            <p style="margin:0 0 20px;font-size:14px;color:#6b7280;">A new ${isQuote ? "estimate request" : "contact form submission"} was just received on <strong>hudsonvalleycontractinggroup.com</strong>.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;font-size:14px;">
              ${rows.join("")}
            </table>
            ${data.description && !isQuote ? "" : ""}
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="background:#f9fafb;padding:20px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;text-align:center;">
            <p style="margin:0 0 14px;font-size:13px;color:#6b7280;">Reply directly to this email to respond to the customer, or call them at <strong>${data.phone || "—"}</strong>.</p>
            <a href="mailto:${data.email}" style="display:inline-block;background:#1e3a5f;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:10px 24px;border-radius:4px;">Reply to ${data.firstName}</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 0 0;text-align:center;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">This notification was sent by your HVCG website. Do not reply to this automated message.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
