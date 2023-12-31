import express, { Application } from "express";
import cors from "cors";
import routesActivities from "./routes/activities";
import routesUsers from "./routes/user";
import routesOrders from "./routes/orders";
import routesMercado from "./routes/mercadopago";
import routesCheckout from "./routes/checkout";
import dotenv from "dotenv";
import sequelize from "./db/connection";
import morgan from "morgan";
dotenv.config();

const app: Application = express();
const port: string = process.env.DB_PORT || "3306";

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api", routesActivities);
app.use("/api/users", routesUsers);
app.use("/api", routesOrders);
app.use("/api", routesMercado);
app.use("/api", routesCheckout);

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database successful.");

    await sequelize.sync(); //{ force: true }

    app.listen(port, () => {
      console.log("Running in port " + port);
    });
  } catch (error) {
    console.error("Could not connect to the database:", error);
  }
};

init();
