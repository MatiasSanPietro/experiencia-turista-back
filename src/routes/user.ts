import { Router } from "express";
import { loginUser, newUser } from "../controllers/user";

const router = Router();

router.post("/register", newUser);
router.post("/login", loginUser);

export default router;

// /api/users/register /api/users/login
