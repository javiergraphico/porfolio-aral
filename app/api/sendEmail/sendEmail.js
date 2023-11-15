const nodemailer = require('nodemailer');

export default (req, res) => {
  const { name, last, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'mail.javiergraphico.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'proccess.env.local.YOUR_USERNAME',
      pass: 'proccess.env.local.YOUR_PASSWORD',
    },
  });

  const mailOption = {
    from: `${email}`,
    to: 'informa@bio.javiergraphico.com',
    subject: `Nuevo correo de ${email}`,
    text: `${name} ${last} escribió: ${message}`,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Correo enviado');
    }
  });

  console.log(name, last, email, message);
  res.send('Éxito');
};


