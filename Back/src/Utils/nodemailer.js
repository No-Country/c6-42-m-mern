const { createTransport } = require("nodemailer");

const email = 'sistemadereserva1@gmail.com';

const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'rhoda.fahey76@ethereal.email',
      pass: 'M7v2BHh28w8pYMgpq4'
  }
});

const mailOptions = {
  from: 'Sitio de Reservas de Canchas Deportivas',
  to: email,
  subject: 'Confirmacion de cuenta',
  html: '<h3>Por favor acive su cuenta clickeando el siguiente enlace <a href="http://localhost:8080/activar-cuenta">ACTIVAR CUENTA</a></h3>'
};

module.exports = { transporter, mailOptions };
