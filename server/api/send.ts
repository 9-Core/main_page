// server/api/mail/send.post.js
import nodemailer from "nodemailer";

// Configuración del servidor SMTP con tus credenciales
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // Servidor SMTP de GoDaddy
  port: 465, // Puerto para conexión segura
  secure: true, // true para 465
  auth: {
    user: "joaquin.meneses@9core.cl", // tu correo de GoDaddy
    pass: "joaco9core", // tu contraseña del correo
  },
});

// Función para crear el template HTML para la empresa
const createCompanyEmailTemplate = (formData) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-left: 5px solid #4361ee;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #eaeaea; margin-bottom: 20px;">
        <h1 style="color: #4361ee; font-size: 24px; margin: 0;">Nuevo mensaje de contacto</h1>
        <p style="color: #666; margin-top: 5px; font-size: 14px;">Recibido el ${new Date().toLocaleString()}</p>
      </div>
      
      <div style="margin-bottom: 25px;">
        <h2 style="color: #333; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid #eaeaea; padding-bottom: 8px;">Información del contacto</h2>
        <p style="margin: 0 0 10px; line-height: 1.6;"><strong style="color: #4361ee;">Nombre:</strong> ${
          formData.name
        }</p>
        <p style="margin: 0 0 10px; line-height: 1.6;"><strong style="color: #4361ee;">Email:</strong> <a href="mailto:${
          formData.email
        }" style="color: #3a86ff; text-decoration: none;">${
    formData.email
  }</a></p>
        <p style="margin: 0 0 10px; line-height: 1.6;"><strong style="color: #4361ee;">Teléfono:</strong> ${
          formData.phone
        }</p>
        ${
          formData.service
            ? `<p style="margin: 0 0 10px; line-height: 1.6;"><strong style="color: #4361ee;">Servicio de interés:</strong> ${formData.service}</p>`
            : ""
        }
      </div>

      <div style="background-color: #f9f9fb; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
        <h2 style="color: #333; font-size: 18px; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #eaeaea; padding-bottom: 8px;">Mensaje</h2>
        <p style="margin: 0; line-height: 1.6; color: #444; white-space: pre-line;">${
          formData.message
        }</p>
      </div>

      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; color: #666; font-size: 12px;">
        <p>Este mensaje fue enviado desde el formulario de contacto de su sitio web.</p>
      </div>
    </div>
  `;
};

// Función para crear el template HTML para el cliente
const createClientEmailTemplate = (formData) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.05); border-top: 5px solid #3a86ff;">
      <div style="text-align: center; margin-bottom: 30px;">
        <!-- Aquí puedes agregar un logo si lo tienes -->
        <h1 style="color: #3a86ff; font-size: 24px; margin-bottom: 5px;">¡Gracias por contactarnos!</h1>
        <p style="color: #666; margin-top: 0;">Hemos recibido tu mensaje correctamente</p>
      </div>
      
      <div style="margin-bottom: 25px; color: #444; line-height: 1.6;">
        <p>Hola <strong>${formData.name}</strong>,</p>
        <p>Nos complace confirmar que hemos recibido tu mensaje. Un miembro de nuestro equipo revisará tu consulta y te responderá a la brevedad posible, normalmente dentro de 24-48 horas hábiles.</p>
        
        <div style="background: linear-gradient(to right, #4361ee, #3a86ff); height: 2px; width: 100%; margin: 20px 0;"></div>
        
        <p>Para tu referencia, aquí está un resumen de la información que nos has proporcionado:</p>
      </div>

      <div style="background-color: #f9f9fb; padding: 20px; border-radius: 6px; margin-bottom: 25px;">
        <p style="margin: 0 0 10px;"><strong style="color: #3a86ff;">Nombre:</strong> ${
          formData.name
        }</p>
        <p style="margin: 0 0 10px;"><strong style="color: #3a86ff;">Email:</strong> ${
          formData.email
        }</p>
        <p style="margin: 0 0 10px;"><strong style="color: #3a86ff;">Teléfono:</strong> ${
          formData.phone
        }</p>
        ${
          formData.service
            ? `<p style="margin: 0 0 10px;"><strong style="color: #3a86ff;">Servicio de interés:</strong> ${formData.service}</p>`
            : ""
        }
        <p style="margin: 0 0 10px;"><strong style="color: #3a86ff;">Mensaje:</strong></p>
        <p style="margin: 0; padding: 10px; background-color: #ffffff; border-radius: 4px; border-left: 3px solid #3a86ff; font-style: italic; white-space: pre-line;">${
          formData.message
        }</p>
      </div>

      <div style="margin-bottom: 25px; color: #444; line-height: 1.6;">
        <p>Si necesitas contactarnos inmediatamente, puedes llamarnos al <strong>+1 (555) 123-4567</strong> o responder directamente a este correo electrónico.</p>
        <p>¡Gracias por tu interés en nuestros servicios!</p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center;">
        <p style="margin: 0 0 10px; color: #666;">Saludos cordiales,</p>
        <p style="margin: 0; font-weight: bold; color: #4361ee;">El equipo de 9Core</p>
        
        <!-- Redes sociales -->
        <div style="margin-top: 20px; font-size: 12px; color: #666;">
          <p>Síguenos en nuestras redes sociales:</p>
          <div>
            <a href="#" style="text-decoration: none; color: #3a86ff; margin: 0 10px;">Facebook</a>
            <a href="#" style="text-decoration: none; color: #3a86ff; margin: 0 10px;">LinkedIn</a>
            <a href="#" style="text-decoration: none; color: #3a86ff; margin: 0 10px;">Instagram</a>
          </div>
        </div>
      </div>

      <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">
        <p>© ${new Date().getFullYear()} 9Core. Todos los derechos reservados.</p>
        <p>Este es un correo automático, por favor no respondas directamente a esta dirección.</p>
      </div>
    </div>
  `;
};

export default defineEventHandler(async (event) => {
  try {
    // Obtenemos los datos del formulario
    const formData = await readBody(event);

    // Extraemos la información necesaria
    const { to, from, replyTo } = formData;
    const clientEmail = formData.email;
    const clientName = formData.name;

    // Validamos que se proporcionen los campos necesarios
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.phone
    ) {
      return {
        statusCode: 400,
        statusMessage:
          "Faltan campos requeridos (nombre, email, teléfono, mensaje)",
        success: false,
      };
    }

    // 1. Enviar email a la empresa
    const companyEmailHtml = createCompanyEmailTemplate(formData);

    try {
      const infoCompany = await transporter.sendMail({
        from: '"Sitio Web 9Core" <no-reply@9core.cl>', // Cambiado para evitar bucles de correo
        to: "joaquin.meneses@9core.cl", // Email de la empresa
        subject: `Nuevo contacto: ${formData.name} - ${
          formData.service || "Consulta general"
        }`,
        html: companyEmailHtml,
        replyTo: clientEmail,
        headers: {
          "X-Priority": "1",
          "X-MSMail-Priority": "High",
          Importance: "high",
          "X-Contact-Form": "true",
        },
      });

      console.log("Correo a la empresa enviado con ID:", infoCompany.messageId);
    } catch (error) {
      console.error("Error al enviar el correo a la empresa:", error);
      // Continuamos con el envío al cliente aunque falle el envío a la empresa
    }

    // 2. Enviar email de confirmación al cliente
    const clientEmailHtml = createClientEmailTemplate(formData);

    const infoClient = await transporter.sendMail({
      from: '"9Core" <no-reply@9core.cl>',
      to: clientEmail,
      subject: "Hemos recibido tu mensaje - 9Core",
      html: clientEmailHtml,
    });

    console.log("Correo al cliente enviado con ID:", infoClient.messageId);

    // Devolvemos respuesta exitosa
    return {
      statusCode: 200,
      statusMessage: "Emails enviados correctamente",
      success: true,
    };
  } catch (error) {
    console.error("Error al enviar los emails:", error);

    // Devolvemos el error
    return {
      statusCode: 500,
      statusMessage: "Error al enviar los emails",
      error: error instanceof Error ? error.message : "Unknown error",
      success: false,
    };
  }
});
