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
      len: {
        args: [0, 255],
        msg: "nombre no puede exceder los 255 caracteres",
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
      len: {
        args: [0, 255],
        msg: "precio no puede exceder los 255 caracteres",
      },
    },
  },
  detail: {
    type: DataTypes.STRING(500),
    allowNull: false,
    validate: {
      notNull: {
        msg: "detalle no puede ser nulo",
      },
      notEmpty: {
        msg: "detalle es obligatorio",
      },
      len: {
        args: [0, 500],
        msg: "detalle no puede exceder los 500 caracteres",
      },
    },
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
    validate: {
      notNull: {
        msg: "is_excursion no puede ser nulo",
      },
      notEmpty: {
        msg: "is_excursion es obligatorio",
      },
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
  },
});
