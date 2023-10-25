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

router.get("/", getActivities);
router.get("/:id", getActivitiesById);
router.post("/", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);

export default router;
