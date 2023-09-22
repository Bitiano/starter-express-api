export class CustomError extends Error {
    statusCode: number;

    constructor(message: string, statusCode?: number) {
        super(message);
        this.statusCode = statusCode ? statusCode : 400;
    }
}

export const throwError = (message: string, statusCode?: number): never => {
    throw new CustomError(message, statusCode);
};
