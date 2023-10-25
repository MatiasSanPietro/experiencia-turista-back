import { Router } from "express";
import { loginUser, newUser } from "../controllers/user";

const router = Router();

router.post("/register", newUser); // /api/users/register
router.post("/login", loginUser); // /api/users/login

export default router;
