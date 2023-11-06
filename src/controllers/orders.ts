import { Request, Response } from "express";
import { Order } from "../models/orders";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const listOrders = await Order.findAll();
    res.json(listOrders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).json({ error: "Orden no encontrada" });
    } else {
      res.json(order);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la orden" });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { amount, user_name, user_phone, confirmed_payment } = req.body;

  try {
    const newOrder = await Order.create({
      amount,
      user_name,
      user_phone,
      confirmed_payment,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: "Error al crear la orden" });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  const { amount, user_name, user_phone, confirmed_payment } = req.body;

  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).json({ error: "Orden no encontrada" });
    } else {
      await order.update({
        amount,
        user_name,
        user_phone,
        confirmed_payment,
      });
      res.json(order);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la orden" });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findByPk(orderId);
    if (!order) {
      res.status(404).json({ error: "Orden no encontrada" });
    } else {
      await order.destroy();
      res.json({ message: "Orden eliminada exitosamente" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la orden" });
  }
};
