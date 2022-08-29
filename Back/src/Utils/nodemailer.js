const { createTransport } = require("nodemailer");

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PW
  }
});

const contactMailOptions = (values) => {
  let { name, club, email, subject, message } = values;
  return {
    from: `${name} -- ${email}`,
    to: process.env.NODEMAILER_USER,
    subject: `Este mensaje es para el club ${club} : ${subject}`,
    text: message
  }
}

const reservationMailOptions = ({ username, email, date, time, paymentMethod, sport, courtName, quantityOfPlayers, totalPrice }) => {
  return {
    from: "Sistema de reservas deportivas",
    to: email,
    bcc: process.env.NODEMAILER_USER,
    subject: `Confirmation de reserva de ${username} el día ${date} a las ${time} en la cancha ${courtName} para jugar ${sport}`,
    html: `<h3>${username}!<br>
        Te esperamos en la cancha ${courtName} el día ${date} a las ${time} para jugar ${sport}.
        <br>Metodo de pago: ${paymentMethod};
        <br>Cantidad de jugadores: ${quantityOfPlayers}
        <br>Precio total cancelado: ${totalPrice}`
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

module.exports = { transporter, mailOptions, contactMailOptions, reservationMailOptions };
