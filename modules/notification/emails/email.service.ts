import { createTransport, getTestMessageUrl } from 'nodemailer';

export const sendMail = async ( to:string, subject:string, html:string ) => {
    const host:string = process.env.SMTP_HOST!
    const port:number = Number(process.env.SMTP_PORT)!
    const user:string = process.env.SMTP_USER!
    const pass:string = process.env.SMTP_PASS!
    const from:string = process.env.SMTP_FROM!
  try {
    const transporter = createTransport({
      host,
      port,
      secure: false,
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });

    return {
      message: info.messageId,
      preview: getTestMessageUrl(info),
    };
  } catch (error) {
    console.log('====================================');
    console.log('error -->', error);
    console.log('====================================');
    throw new Error('Error send mail');
  }
};