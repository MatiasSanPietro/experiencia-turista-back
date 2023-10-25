import { Request, Response } from "express";
import { Activity } from "../models/activities";

export const getActivities = async (req: Request, res: Response) => {
  try {
    const listActivities = await Activity.findAll();
    res.json(listActivities);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las actividades" });
  }
};

// Obtener una actividad por su ID
export const getActivitiesById = async (req: Request, res: Response) => {
  const activityId = req.params.id;
  try {
    const activity = await Activity.findByPk(activityId);
    if (!activity) {
      res.status(404).json({ error: "Actividad no encontrada" });
    } else {
      res.json(activity);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la actividad" });
  }
};

// Crear una nueva actividad
export const createActivity = async (req: Request, res: Response) => {
  const { name, price, detail, image } = req.body;
  try {
    const newActivity = await Activity.create({ name, price, detail, image });
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: "Error al crear la actividad" });
  }
};

// Actualizar una actividad por su ID
export const updateActivity = async (req: Request, res: Response) => {
  const activityId = req.params.id;
  const { name, price, detail, image } = req.body;
  try {
    const activity = await Activity.findByPk(activityId);
    if (!activity) {
      res.status(404).json({ error: "Actividad no encontrada" });
    } else {
      await activity.update({ name, price, detail, image });
      res.json(activity);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la actividad" });
  }
};

// Eliminar una actividad por su ID
export const deleteActivity = async (req: Request, res: Response) => {
  const activityId = req.params.id;
  try {
    const activity = await Activity.findByPk(activityId);
    if (!activity) {
      res.status(404).json({ error: "Actividad no encontrada" });
    } else {
      await activity.destroy();
      res.json({ message: "Actividad eliminada exitosamente" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la actividad" });
  }
};
