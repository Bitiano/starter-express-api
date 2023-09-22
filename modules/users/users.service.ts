import { hashSync, compare } from "bcrypt";
import { db } from '../../config';
import { userModel } from '../../utils';

export const create = (user: userModel) => {
        user.password = hashSync(user.password, 10)
        return db.user.create({
            data: user
        })
}

export const findOne = async (userId: string) => {
    try {
        const user = await db.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
                password: false,
            }
        })

        if (!user) throw new Error("User not found");

        return user as userModel;
    } catch (error) {
         throw new Error("User not found");
    }
}

export const findUserByEmail = (email: string) => {
    try {
        return db.user.findUnique({
            where: {
                email,
            },
        });
    } catch (error) {
        throw new Error('User not found');
    }
}

export const comparePassword = async (email: string, password: string) => {
    const existenUser = await findUserByEmail(email);

    if (!existenUser) throw new Error('user our password invalid');

    const isValid = await compare(password, existenUser.password);

    if (!isValid) throw new Error('user our password invalid');

    return existenUser;
}

export const findEventsToUser = (userId:string) =>{
    try {
        return db.user.findUnique({
            where:{
                id:userId
            },
            select:{
                events:{
                    select:{
                        id:true,
                        title:true,
                        description:true,
                        date:true,
                        userId:false
                    }
                }
            }
        })
    } catch (error) {
        throw new Error("User not found")
    }
}