import { Router } from "express";
import { getActivities } from "../controllers/activities";
// import validateToken from "./validate-token";

const router = Router();

router.get("/", getActivities); // /api/activities/

export default router;
