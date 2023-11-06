import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirmed_payment: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
