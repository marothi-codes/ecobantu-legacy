import nodemailer from 'nodemailer';

async function handler(req, res) {
  const { name, email, phone, subject, message } = req.body;

  const adsBody = `
    <h1>ecoBantu Website</h1>
    <p>
      <strong>Name: </strong> ${name}<br />
      <strong>Email: </strong> ${email}<br />
      <strong>Phone: </strong> ${phone}<br />
      <strong>Subject: </strong> ${subject}<br />
      <strong>Message: </strong> ${message}
    </p>
    <p>
      Be sure to contact the website user ASAP because it might be a potential client.
    </p>
  `;

  const userBody = `
    <h1>Thank You for ecoBantu Solutions</h1>

    <p>
      One of our team members will be sure to contact you very soon. We are looking forward to working with you.
    </p>
  `;
  const to = ['test@localhost.io', 'web@localhost.io'];
  const bodies = [adsBody, userBody];

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    let info;

    for (let i = 0; i < 2; i++) {
      info = await transport.sendMail({
        from: 'Localhost Bot <noreply@localhost.io>',
        to: to[i],
        subject: subject,
        html: bodies[i],
      });
    }
    console.log(info.messageId);
    res.status(200).json({
      message: `Thank you for contacting us ${name}, ecoBantu Solutions has received your message.`,
      type: 'success',
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: 'An error occurred while sending your message.', type: 'danger' });
  }
}

export default handler;
