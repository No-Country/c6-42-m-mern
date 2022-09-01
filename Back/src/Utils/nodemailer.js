const { createTransport } = require("nodemailer");

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PW
  }
});

const contactMailOptions = ({ name, email, subject, message }) => {
  return {
    from: `${name} -- ${email}`,
    to: email,
    subject,
    text: message
  }
}

const mailOptions = (confirmationLink, userEmail, option) => {
  from = "Sistema de reservas deportivas";
  if (option == "activation") {
    return {
      from,
      to: userEmail,
      cc: process.env.NODEMAILER_USER,
      subject: 'Confirmacion de cuenta',
      html: `<h3>Por favor active su cuenta clickeando el siguiente enlace <a href="${confirmationLink}">ACTIVAR CUENTA</a></h3>`
    }
  }
  if (option === "renewpass") {
    return {
      from,
      to: userEmail,
      cc: process.env.NODEMAILER_USER,
      subject: 'Reinicio de contraseña',
      html: `<h3>Por favor actualice su contraseña clickeando el siguiente enlace <a href="${confirmationLink}">Actualizar contraseña</a></h3>`
    }
  }
}

module.exports = { transporter, mailOptions, contactMailOptions };