import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false, //true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
