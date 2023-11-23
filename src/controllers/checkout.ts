import { Request, Response } from "express";
import { Order } from "../models/orders";
import { OrderDetails } from "../models/order_detail";

const checkoutController = {
  async startCheckout(req: Request, res: Response) {
    try {
      const { user_name, user_phone, activityId } = req.body;

      const order: any = await Order.create({ user_name, user_phone });

      await OrderDetails.create({
        orderId: order.id,
        activityId,
        confirmed_payment: false,
      });

      res.status(201).json({ orderId: order.id });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error al iniciar el proceso de checkout" });
    }
  },
};

export default checkoutController;
