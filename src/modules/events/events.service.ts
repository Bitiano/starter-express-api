import { db } from '../../config'
import { eventModel, userModel } from '../../utils'
import { sendSms, sendMailToEvent } from '../notification'

export const create = (event: eventModel) => {
    try {
        return db.events.create({
            data: event
        })
    } catch (error) {

        console.log(error)
    }
}

export const getEventByUser = async (userId: string) => {
    try {
        const events = await db.events.findMany({
            where: {
                userId
            }
        })
        return events
    } catch (error) {
        console.log(error)
    }
}

export const getEventById = async (eventId: string) => {
    try {
        const event = await db.events.findUnique({
            where: {
                id: eventId
            }
        })

        if (!event) throw new Error("Event not found")
        return event
    } catch (error) {
        console.log(error)
    }
}

export const includesUserEvents = async (user: userModel, event: eventModel) => {
    const userId = user.id!
    const eventId = event.id!

    await db.userEvents.create({
        data: {
            userId,
            eventId
        }
    })

    await sendSms(user, event)
    await sendMailToEvent(user, event)
}