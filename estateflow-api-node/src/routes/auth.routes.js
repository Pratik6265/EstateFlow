import { Router } from 'express';
import { signUp, signIn } from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';


const router = Router();

router.post("/register", signUp);
router.post("/login", signIn);

router.get("/profile", verifyToken, (req, res) => {
    return res.status(200).json({message: "Access granted", userId: req.userId})
})

export default router;