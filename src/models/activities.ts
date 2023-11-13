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
    allowNull: false,
    validate: {
      notNull: {
        msg: "nombre no puede ser nulo",
      },
      notEmpty: {
        msg: "nombre es obligatorio",
      },
    },
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: "precio no puede ser nulo",
      },
      notEmpty: {
        msg: "precio es obligatorio",
      },
    },
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activity_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure_times: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_excursion: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
  },
});
