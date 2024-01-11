import { Preinscripcion } from "../models/Preinscripcion.js";


export const createPreinscripcion = async (req,res) =>{
  const {nombre, apellido, telefono, email,curso, comentarios} = req.body

  try {
    const preinscripcion = await Preinscripcion.create({
      nombre,
      apellido,
      telefono,
      email,
      curso,
      comentarios
    });

    res.json(preinscripcion);
  } catch (error) {
   return res.status(400).json({ error: error.message });
  }
}

export const getPreinscripciones = async (req,res)=>{
  try {
    const preinscripciones = await Preinscripcion.findAll();
    res.json(preinscripciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

  // Obtener una preinscripción por ID
  // exports.getPreinscripcion = async (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     const preinscripcion = await Preinscripcion.findByPk(id);
  //     if (preinscripcion) {
  //       res.status(200).json(preinscripcion);
  //     } else {
  //       res.status(404).json({ error: 'Preinscripción no encontrada' });
  //     }
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // };