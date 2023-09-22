import { sendMail } from './';
import { welcomeMailTemplate } from '../../../templates/welcome';
import { eventModel, userModel } from '../../../utils/models.js';

export const sendMailToEvent = async (user: userModel, event: eventModel) => {

    const subject = `Welcome to Event ${event.title}`;
    const to = user.email;
    const html = await welcomeMailTemplate(user.name, event);
    await sendMail(to, subject, html);

};