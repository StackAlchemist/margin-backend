import { Router } from "express";
import { registerController } from "./auth.controller";
import { registerSchema } from "./auth.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = Router();

router.post(
    "/register",
    validateRequest(registerSchema),
    registerController
);

export default router;