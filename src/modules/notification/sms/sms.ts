import { eventModel, userModel } from '../../../utils';
import { twilioConfig } from '../../../config'

export const sendSms = async (user: userModel, event: eventModel) => {
  const message = `Register in the event ${event.title}, in the day ${event.date} the description to the event${event.description}`;
  const phone = user.phoneNumber

  await twilioConfig(phone, message);
}
