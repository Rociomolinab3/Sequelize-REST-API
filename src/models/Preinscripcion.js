const { DataTypes } = require('sequelize');
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

module.exports = (sequelize) => {
  const Preinscripcion = sequelize.define(
    'Preinscripcion', {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Curso: {
      type: DataTypes.STRING, // O puedes usar DataTypes.ENUM si tienes opciones fijas
      allowNull: false,
    },
    Comentarios: {
      type: DataTypes.TEXT,
    },
  });

  return Preinscripcion;
};