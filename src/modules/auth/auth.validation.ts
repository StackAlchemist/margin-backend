import { z } from "zod";

export const registerSchema = z.object({
    username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(30),

    email: z
    .email("Invalid email address")
    .trim()
    .toLowerCase(),

    password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters"),
})


export type RegisterSchema = z.infer<typeof registerSchema>;