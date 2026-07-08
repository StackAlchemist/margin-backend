import jwt from "jsonwebtoken"
import { env } from "../config/env"

export const generateAccessToken = (userId: string) => 
     jwt.sign({userId}, env.JWT_SECRET, {expiresIn: env.ACCESS_TOKEN_EXPIRES_IN,
    }
    )


export const generateRefreshToken = (userId: string) =>
     jwt.sign(
        {userId},
        env.JWT_REFRESH_SECRET,
        {
            expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
        }
    )