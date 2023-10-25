import express, { Application } from "express";
import cors from "cors";
import routesActivities from "../routes/activities";
import routesUser from "../routes/user";
import { Activity } from "./activities";
import { User } from "./user";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.midlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Aplicacion corriendo en el puerto " + this.port);
    });
  }

  routes() {
    this.app.use("/api/activities", routesActivities);
    this.app.use("/api/users", routesUser);
  }

  midlewares() {
    // Parseo body
    this.app.use(express.json());
    // Cors
    this.app.use(cors());
  }

  async dbConnect() {
    try {
      await Activity.sync();
      await User.sync();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export default Server;
