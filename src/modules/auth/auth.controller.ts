import { Request, Response } from "express";
import { register } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import { asyncHandler } from "../../utils/asyncHandler"

export const registerController = asyncHandler(async (req, res) => {

 

    const result = await register(req.body);

    return sendResponse(
        res,
        201,
        "Registration successful",
        result
    )
})