import { Router } from "express";
import { registerController } from "./auth.controller";
import { registerSchema } from "./auth.validation";
import { validate as validateRequest } from "../../middleware/validate";

const router = Router();

router.post(
    "/register",
    validateRequest(registerSchema),
    registerController
);

export default router;