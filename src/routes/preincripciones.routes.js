import {Router} from 'express'
import {createPreinscripcion, getPreinscripciones} from '../controllers/preinscripciones.controller.js'

const router = Router()

router.post('/preinscripciones', createPreinscripcion);
router.get('/preinscripciones', getPreinscripciones);
// router.get('preinscripciones/:id', getPreinscripcion);


export default router;