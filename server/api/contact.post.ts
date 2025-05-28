import nodemailer from "nodemailer";
import type { ContactBody } from "@/interfaces/ContactType";

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_KEY,
    },
  });

  const mailOptions = {
    from: body.email,
    to: process.env.EMAIL_USER,
    subject: `Contato de ${body.name} pelo portfolio`,
    html: `
            <h1>Novo contato recebido pelo portfolio</h1>
            <p><strong>Nome:</strong> ${body.name}</p>
            <p><strong>E-mail:</strong> ${body.email}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${body.message}</p>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);

    return { status: "success" };
  } catch (error) {
    return { status: "error" };
  }
});
