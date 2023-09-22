import { asyncWrapper, isAuthenticated } from '../../middlewares';
import { UsersController } from './users.controller';
import { Router } from 'express';

const userRoutes = Router();

const users = new UsersController();

userRoutes.get('/:userId/events', isAuthenticated, asyncWrapper(users.findEventsUser));

export default userRoutes;
