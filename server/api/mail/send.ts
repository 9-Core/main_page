//nodemailer

// server/api/send.ts
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  // Solo permitir método POST
  if (getMethod(event) !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Método no permitido",
    });
  }

  try {
    // Obtener datos del cuerpo de la solicitud
    const body = await readBody(event);
    const { to, subject, text, html, from } = body;

    // Validar campos requeridos
    if (!to || !subject || (!text && !html)) {
      throw createError({
        statusCode: 400,
        statusMessage:
          'Los campos "to", "subject" y al menos uno de "text" o "html" son requeridos',
      });
    }

    // Configurar transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Reemplaza con tu servidor SMTP
      port: 587,
      secure: false, // true para puerto 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
    });

    // Opciones del correo
    const mailOptions = {
      from: from || "Sitio Web 9core noreplyoso.o7@gmail.com",
      to,
      subject,
      text,
      html,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    // Responder con éxito
    return {
      success: true,
      message: "Correo enviado correctamente",
    };
  } catch (error) {
    console.error("Error al enviar correo:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error al enviar correo",
      data: error instanceof Error ? error.message : "Error desconocido",
    });
  }
});
