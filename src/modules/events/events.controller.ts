import { Request, Response } from "express";
import { create, getEventById, getEventByUser, includesUserEvents } from "./events.service";
import { eventModel } from "../../utils";
import { findOne } from "../users/users.service";

export class EventsController {

    async create(req: Request, res: Response) {
        const { title, description, date } = req.body;

        const userId: string = req.user_id!;

        const event: eventModel = await create({ title, description, date, userId })!

        const user = await findOne(userId)

        await includesUserEvents(user!, event)

        return res.status(201).json({
            message: 'Event created',
            data: {
                title,
                description,
                date,
            }
        })
    }

    async getEvents(req: Request, res: Response) {
        const userId = req.user_id

        const events = await getEventByUser(userId)

        return res.status(200).json({
            data: events
        })
    }

    async registerEvent(req: Request, res: Response) {
        const { eventId } = req.params

        const event = await getEventById(eventId)

        const user = await findOne(req.user_id)

        await includesUserEvents(user!, event!)
        
        return res.status(201).json({
            message: 'User registered in event',
            data: event
        })
    }
}