import { object, string } from 'zod';

export const registerSchema = object({
    body: object({
        email: string({
            required_error: 'email is required',
        }).email(),
        name: string({
            required_error: 'name is required',
        }),
        password: string({
            required_error: 'password is required',
        }).min(6, 'must be at least 6 character'),
        phoneNumber: string({
            required_error: 'phone number is required',
        }).min(11, 'must be at least 11 character'),
    }),
});

export const loginSchema = object({
    body: object({
        email: string({
            required_error: 'email is required',
        }).email(),
        password: string({
            required_error: 'password is required',
        }).min(6, 'must be at least 6 character'),
    }),
});

export const revokeTokenSchema = object({
    body: object({
        refreshToken: string({
            required_error: 'refreshToken is required',
        }),
    }),
});