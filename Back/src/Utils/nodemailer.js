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
    from: `${name}`,
    to: process.env.NODEMAILER_USER,
    subject,
    html: `<h3>${name} (${email}) envía el siguiente mensaje para el club ${club}:<h3><br> <h2>${message}<h2>`
  }
}

const reservationMailOptions = (username, email, date, time, sport, court, totalPrice) => {
  return {
    from: username,
    to: email,
    bbc: process.env.NODEMAILER_USER,
    subject: `Confirmación de reserva de ${username} el día ${date} a las ${time}`,
    html:`<h2>Hola ${username}!</h2> Este correo es para confirmar tu reserva el día <strong>${date}</strong> a las <strong>${time}</strong>, en la cancha <strong>${court}</strong> 
    para jugar <strong>${sport}</strong>. <br>Total abonado por la reserva <strong>${totalPrice}</strong>.<br><h3>Muchas gracias por elegirnos!</h3><strong><i>Deportes Online</i></strong>`
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
      html: `<h3>Por favor, active su cuenta clickeando el siguiente enlace <a href="${confirmationLink}">ACTIVAR CUENTA</a></h3><strong><i>Deportes Online</i></strong>`
    }
  };
  if (option === "renewpass") {
    return {
      from,
      to: userEmail,
      cc: process.env.NODEMAILER_USER,
      subject: 'Reinicio de contraseña',
      html: `<h3>Por favor, actualice su contraseña clickeando el siguiente enlace <a href="${confirmationLink}">Actualizar contraseña</a></h3><strong><i>Deportes Online</i></strong>`
    }
  };
};

module.exports = { transporter, mailOptions, contactMailOptions, reservationMailOptions };