import { Request, Response } from "express";
import { Activity } from "../models/activities";

export const getActivities = async (req: Request, res: Response) => {
  const listActivities = await Activity.findAll();
  res.json(listActivities);
};
