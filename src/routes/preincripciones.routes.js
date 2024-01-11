import {Router} from 'express'
import {createPreinscripcion,getPreinscripciones, getPreinscripcion} from '../controllers/preinscripciones.controller'

const router = Router()

router.post('/preinscripciones', createPreinscripcion);
router.get('/preinscripciones',getPreinscripciones);
router.get('preinscripciones/:id', getPreinscripcion);


export default router;