import { Router } from "express";
import checkoutController from "../controllers/checkout";

const router = Router();

router.post("/checkout/start", checkoutController.startCheckout);

export default router;

// http://localhost:3001/api/checkout/start
