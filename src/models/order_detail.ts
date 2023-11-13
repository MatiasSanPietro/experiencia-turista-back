import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Activity } from "./activities";
import { Order } from "./orders";

export const OrderDetails = sequelize.define("order_details", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  activityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  confirmed_payment: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

OrderDetails.belongsTo(Order, { foreignKey: "orderId" });
OrderDetails.belongsTo(Activity, { foreignKey: "activityId" });
