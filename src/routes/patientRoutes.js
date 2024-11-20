import express from 'express';
import { getPatients, addPatient } from '../controllers/patientController.js';
import { patientSchema } from '../validators/patientValidator.js';
import validate from '../middlewares/validate.js';

const router = express.Router();

router.get('/', getPatients); 
router.post('/', validate(patientSchema)  , addPatient); 


export default router;
