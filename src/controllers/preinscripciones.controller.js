const { Preinscripcion } = require('../models');

exports.createPreinscripcion = async (req, res) => {
  try {
    const preinscripcion = await Preinscripcion.create(req.body);
    res.status(201).json(preinscripcion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPreinscripciones = async (req, res) => {
    try {
      const preinscripciones = await Preinscripcion.findAll();
      res.status(200).json(preinscripciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Obtener una preinscripción por ID
  exports.getPreinscripcion = async (req, res) => {
    const { id } = req.params;
    try {
      const preinscripcion = await Preinscripcion.findByPk(id);
      if (preinscripcion) {
        res.status(200).json(preinscripcion);
      } else {
        res.status(404).json({ error: 'Preinscripción no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };