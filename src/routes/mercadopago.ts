import { Router } from "express";
import { createPayment, receiveWebhook } from "../controllers/mercadopago";

const router = Router();

router.post("/create-order", createPayment);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));

export default router;
