import mercadopago from "mercadopago";
import { Request, Response } from "express";

export const createPayment = async (req: Request, res: Response) => {
  try {
    mercadopago.configure({
      access_token: process.env.MERCADOPAGO_API_KEY || "",
    });

    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Invalid items data" });
    }

    const preferencesData = {
      items,
      back_urls: {
        success: "http://localhost:3001/success",
      },
    };

    const result = await mercadopago.preferences.create(preferencesData);
    console.log(result);
    res.send("creando orden");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const receiveWebhook = async (req: Request, res: Response) => {
  try {
    const payment = req.query as { [key: string]: string };
    console.log(payment);
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(
        Number(payment["data.id"])
      );
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
