import { NextFunction, Request, Response } from "express";

export const errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status =
    error.statusCode || 500;

return res.status(status).json({
    success:false,
    message:error.message
});
}