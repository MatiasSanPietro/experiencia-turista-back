import { Router } from "express";
import {
  getActivities,
  getActivitiesById,
  createActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activities";
// import validateToken from "./validate-token";

const router = Router();

router.get("/activities", getActivities);
router.get("/activities/:id", getActivitiesById);
router.post("/activities/", createActivity);
router.put("/activities/:id", updateActivity);
router.delete("/activities/:id", deleteActivity);

export default router;

// /api/activities
