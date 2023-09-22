import jwt from 'jsonwebtoken';
import { userModel } from './models';

export const generateAcessToken = (user:userModel) => {
    const jwt_access: string = process.env.JWT_ACCESS_SECRET!
    return jwt.sign({ userId: user.id }, jwt_access, {
        expiresIn: '5m',
    });
};

export const generateRefreshToken = (user:userModel, jwtId:string) => {
    const jwt_refresh:string = process.env.JWT_REFRESH_SECRET!
    return jwt.sign({ userId: user.id, jwtId }, jwt_refresh, {
        expiresIn: '4h',
    });
};

export const generateTokens = (user:userModel, jwtId:string) => {
    const accessToken = generateAcessToken(user);
    const refreshToken = generateRefreshToken(user, jwtId);

    return {
        accessToken,
        refreshToken,
    };
};
