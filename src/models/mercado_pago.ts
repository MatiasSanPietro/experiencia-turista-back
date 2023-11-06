import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Order } from "./orders";

export const Mercado = sequelize.define("mercado", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Mercado.belongsTo(Order, { foreignKey: "orderId" });
