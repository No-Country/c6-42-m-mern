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
  let {name,club,email,subject,message} = values;
  return {
    from: `${name} -- ${email}`,
    to: process.env.NODEMAILER_USER,
    subject:`Este mensaje es para el club ${club} : ${subject}`,
    text:message
    }
}

const mailOptions = (confirmationLink,userEmail) =>{
  console.log(confirmationLink);
  return {
  from: "Sistema de reservas deportivas",
  // Cambiar to: hacia quien vaya dirigido (el email del usuario)
  to: userEmail,
  cc:process.env.NODEMAILER_USER,
  subject: 'Confirmacion de cuenta',
  html: `<h3>Por favor active su cuenta clickeando el siguiente enlace <a href="${confirmationLink}">ACTIVAR CUENTA</a></h3>`
}}

module.exports = { transporter, mailOptions, contactMailOptions };
