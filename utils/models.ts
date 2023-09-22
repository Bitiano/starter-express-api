export type userModel= {
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    id?: string,
}

export type eventModel = {
    title: string,
    description: string,
    date: string,
    userId: string,
    id?: string
}

export type userEventsModel = {
    userId: string,
    eventId: string,
    id?: string,
    user: userModel,
    event: eventModel
}