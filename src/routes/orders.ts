import { Router } from "express";
import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders";

const router = Router();

router.get("/orders", getOrders);
router.get("/orders/:id", getOrderById);
router.post("/orders", createOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

export default router;
