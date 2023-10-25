import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Activity = sequelize.define("activity", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  detail: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
});
