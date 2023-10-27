import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "proyectos", // db name,
  "postgres", // username
  "Upro123", // password
  {
    host: "localhost",
    dialect: "postgres",
  }
);
