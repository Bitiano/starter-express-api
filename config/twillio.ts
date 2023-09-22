import client from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;
const fromPhone = process.env.TWILIO_PHONE;


export const twilioConfig = async (phone: string, message: string) => {
    try {
        console.log(phone, message);
        const result = await client(accountSid, authToken).messages.create({
            body: message,
            to: `+55${phone}`,
            from: fromPhone,
        });

        return result;
    } catch (error) {
        return error
    }
};