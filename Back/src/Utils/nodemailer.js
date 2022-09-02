const { createTransport } = require("nodemailer");

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PW
  }
});

const contactMailOptions = ({ name, email, club, subject, message }) => {
  return {
    from: `${name} -- ${email}`,
    to: process.env.NODEMAILER_USER,
    subject,
    html: `<h3>${name} envia el siguiente mensaje para el club ${club}:<h3><br> <h3>${message}<h3>`
  }
}

const reservationMailOptions = (username, email, date, time, sport, court, totalPrice) => {
  return {
    from: username,
    to: email,
    bbc: process.env.NODEMAILER_USER,
    subject: `Confirmación de reserva de ${username} el día ${date} a las ${time}`,
    text: `${username}! Este correo es para confirmar tu reserva el día ${date} a las ${time} en la cancha ${court}
    para jugar ${sport}. Total abonado por la reserva ${totalPrice}`
  }
};

const mailOptions = (confirmationLink, userEmail, option) => {

  const from = "Sistema de reservas deportivas";

  if (option == "activation") {
    return {
      from,
      to: userEmail,
      cc: process.env.NODEMAILER_USER,
      subject: 'Confirmacion de cuenta',
      html: `<h3>Por favor active su cuenta clickeando el siguiente enlace <a href="${confirmationLink}">ACTIVAR CUENTA</a></h3>`
    }
  };
  if (option === "renewpass") {
    return {
      from,
      to: userEmail,
      cc: process.env.NODEMAILER_USER,
      subject: 'Reinicio de contraseña',
      html: `<h3>Por favor actualice su contraseña clickeando el siguiente enlace <a href="${confirmationLink}">Actualizar contraseña</a></h3>`
    }
  };
};

module.exports = { transporter, mailOptions, contactMailOptions, reservationMailOptions };