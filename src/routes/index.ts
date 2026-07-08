import { Router } from 'express';
import authRoutes from '../modules/auth';

const router = Router();

router.get('/health', (_, res)=>{
    res.status(200).json({success: true, 
        message: 'API is healthy'});
})

router.use("/auth", authRoutes);

export default router;