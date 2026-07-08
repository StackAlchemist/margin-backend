import { Request, Response } from "express";
import { register } from "./auth.service";
import { sendResponse } from "../../utils/response";

export const registerController = async (req: Request, res: Response, next: NextFunction) => {

    try {

    const result = await register(req.body);

    return sendResponse(
        res,
        201,
        "Registration successful",
        result
    )}catch (error) {
        next(error)
    }
}