// Check if the email already exists.
// Hash the password.
// Save the user.
// Return the new user (without the password).

import { registerSchema } from "./auth.validation";
import { hashPassword } from "../../utils/hash";
import {
    createUser,
    findUserByEmail,
    updateRefreshTokenHash,
} from "./auth.repository";
import { 
    generateAccessToken, 
    generateRefreshToken 
} from "../../utils/jwt";
import { ApiError } from "../../utils/ApiError"


export const register = async (payload: RegisterSchema) => {
    const existingUser = await findeUserByEmail(payload.email);

    if (existingUser) {
        throw new ApiError(
            409,
            "Email already exists."
        );
    }

    const hashedPassword = await hashPassword(payload.password);

    const user = await createUser({
        username: payload.username,
        email: payload.email,
        password: hashedPassword,
    });

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    const refreshTokenHash = await hashPassword(refreshToken);
    await updateRefreshTokenHash(user.id, refreshTokenHash);

    return {
        user:{
            id: user.id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
        },
        accessToken,
        refreshToken,
    };

}