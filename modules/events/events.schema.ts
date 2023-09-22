import { date, object, string } from 'zod';

export const createEventSchema = object({
    body: object({
        title: string({
            required_error: 'Title is required'
        }),
        description: string({
            required_error: 'Description is required'
        }),
        date: date({
            required_error: 'Date is required'
        })
    })
})