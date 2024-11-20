import Joi from 'joi';

export const patientSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  age: Joi.number().integer().min(0).required(),
  address: Joi.string().min(5).max(100).required(),
});
