import { Router } from "express";
import { EventsController } from "./events.controller";
import { asyncWrapper, validate } from "../../middlewares";
import { createEventSchema } from "./events.schema";

const eventRoutes = Router();

const eventsController = new EventsController();

eventRoutes.post('/', validate(createEventSchema), asyncWrapper(eventsController.create));
eventRoutes.get('/', asyncWrapper(eventsController.getEvents));
eventRoutes.post('/:eventId/users', asyncWrapper(eventsController.registerEvent));

export default eventRoutes;
