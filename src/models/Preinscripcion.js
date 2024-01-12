import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Preinscripcion = sequelize.define(
    'preinscripcion',
     {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      curso: {
        type: DataTypes.STRING, // O puedes usar DataTypes.ENUM si tienes opciones fijas
        allowNull: false,
      },
      sede: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      comentarios: {
        type: DataTypes.TEXT,
      },
  });

 