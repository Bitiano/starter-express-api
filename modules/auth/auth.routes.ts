import { Router } from "express";
import { AuthController } from "./auth.controller";
import { asyncWrapper, validate } from "../../middlewares";
import { loginSchema, registerSchema, revokeTokenSchema } from "./auth.schema";

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post('/users', validate(registerSchema), asyncWrapper(authController.create));
authRoutes.post('/login', validate(loginSchema),asyncWrapper(authController.login));
authRoutes.post('/logout', validate(revokeTokenSchema),asyncWrapper(authController.logout));

export default authRoutes