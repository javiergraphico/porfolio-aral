import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, last, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'mail.javiergraphico.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'informa@bio.javiergraphico.com', // tu correo
        pass: process.env.local.YOUR_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'informa@bio.javiergraphico.com', // tu correo
      to: 'informa@bio.javiergraphico.com', // correo del destinatario
      subject: 'Send Email using Node.js',
      html: `
        <h1>SOLICITUD DE INFORMACIÓN</h1>
        <p>Nombre: ${name}</p>
        <p>Apellido: ${last}</p>
        <p>Email: ${email}</p>
        <p>Mensaje: ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado Satisfactoriamente' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error al enviar el email' }, { status: 500 });
  }
}


