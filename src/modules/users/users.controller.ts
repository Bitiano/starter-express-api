import { Request, Response } from "express";
import { findEventsToUser, findOne } from "./users.service";

export class UsersController {
    async findEventsUser(req:Request, res:Response){
            const { userId } = req.params;

            const user = await findEventsToUser(userId);

            return res.status(200).json(user);
    }
}