import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, email, whatsapp, negocio, servicio, mensaje } = body;

  if (!nombre || !email || !servicio) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Rock Agency <onboarding@resend.dev>",
    to: "mhuryy22@gmail.com",
    subject: `Nuevo contacto de ${nombre} — ${servicio}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #18181b;">
        <div style="background: #402178; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo mensaje de contacto</h1>
        </div>
        <div style="border: 1px solid #e4e4e7; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px; width: 160px;">Nombre</td>
              <td style="padding: 8px 0; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #402178;">${email}</a></td>
            </tr>
            ${whatsapp ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px;">WhatsApp</td>
              <td style="padding: 8px 0;">${whatsapp}</td>
            </tr>` : ""}
            ${negocio ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Negocio</td>
              <td style="padding: 8px 0;">${negocio}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px;">Servicio</td>
              <td style="padding: 8px 0; font-weight: 600; color: #402178;">${servicio}</td>
            </tr>
            ${mensaje ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-size: 13px; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px 0;">${mensaje.replace(/\n/g, "<br/>")}</td>
            </tr>` : ""}
          </table>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #a1a1aa; text-align: center;">
          Enviado desde rockagency.com · ${new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" })}
        </p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar el correo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
