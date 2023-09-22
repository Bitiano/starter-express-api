import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const jwt_access: string = process.env.JWT_ACCESS_SECRET!
    if (!authorization) {
        res.status(401);
        throw new Error('Un-Authorized');
    }

    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
        res.status(401);
        throw new Error('Malformed token');
    }

    const user_id:any  = jwt.verify(token, jwt_access);

    const {userId} = user_id

    req.user_id = userId
    console.log(userId);
    try {
        
        return next();
    } catch (error) {
        throw new Error('Un-Authorized');
    }
};
