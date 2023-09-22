import { Request, Response } from "express";
import { authenticatedUserByEmailAndPassword, register, revokeTokens } from "./auth.service";

export class AuthController {
    async create(req: Request, res: Response) {
            const { email, password, name, phoneNumber } = req.body;

            const result = await register(email, password, name, phoneNumber)

            return res.status(201).json(result);
    }

    async login(req:Request, res:Response){
        const {email, password} = req.body;

        const result = await authenticatedUserByEmailAndPassword(email, password);

        return res.json(result);
    }

    async logout(req:Request, res:Response){
        const { refreshToken } = req.body;

        await revokeTokens(refreshToken)
        
        return res.json({message: `Tokens revoked`})
    }
}