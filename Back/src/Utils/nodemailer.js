const { createTransport } = require("nodemailer");

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PW
  }
});

const mailOptions = {
  from: 'Sitio de Reservas de Canchas Deportivas',
  // Cambiar to: hacia quien vaya dirigido (el email del usuario)
  to: process.env.NODEMAILER_USER,
  subject: 'Confirmacion de cuenta',
  html: '<h3>Por favor acive su cuenta clickeando el siguiente enlace <a href="http://localhost:8080/activar-cuenta">ACTIVAR CUENTA</a></h3>'
};

module.exports = { transporter, mailOptions };
