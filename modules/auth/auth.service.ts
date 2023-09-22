import { v4 as uuidv4 } from "uuid"
import { create, findUserByEmail, comparePassword, findOne } from "../users/users.service"
import { db } from "../../config";
import { hashToken, userModel, generateTokens } from "../../utils";

export const addRefreshTokenToWhiteList = (jwtId: string, refreshToken: string, userId: string) => {
    try {
        return db.refreshToken.create({
            data: {
                id: jwtId,
                hashedToken: hashToken(refreshToken),
                userId,
            },
        });
    } catch (error) {

        console.log(error);
    }
};

export const register = async (email: string, password: string, name: string, phoneNumber: string) => {
    try {
        const existenUser = await findUserByEmail(email);

        if (existenUser) {
            throw new Error('User already exists');
        }

        const user = await create({ email, password, name, phoneNumber });

        const result = await returnResponse(user as userModel);

        return result;
    } catch (error) {
        throw new Error('User already exists');
    }
}

export const authenticatedUserByEmailAndPassword = async (email: string, password: string) => {
    const getUser = await comparePassword(email, password);

    const result = await returnResponse(getUser as userModel);

    return result;
}

export const revokeTokens = (hashedToken: string) => {
    return db.refreshToken.updateMany({
        where: {
            hashedToken,
        },
        data: {
            revoked: true
        }
    })
}

const returnResponse = async (user: userModel) => {
    const jwtId = uuidv4();

    const { accessToken, refreshToken } = generateTokens(user, jwtId);

    const userId = user.id!

    await addRefreshTokenToWhiteList(
        jwtId,
        refreshToken,
        userId,
    );

    return {
        accessToken,
        refreshToken,
    };
};