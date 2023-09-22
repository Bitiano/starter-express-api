import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/users/user.routes";
import eventRoutes from "./modules/events/events.routes";
import { isAuthenticated } from "./middlewares";

const routes = Router();

routes.use('/auth', authRoutes)
routes.use('/users', userRoutes)
routes.use('/events', isAuthenticated, eventRoutes)

export default routes;