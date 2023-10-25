import { Sequelize } from "sequelize";

const sequelize = new Sequelize("expturista", "root", "root123", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
