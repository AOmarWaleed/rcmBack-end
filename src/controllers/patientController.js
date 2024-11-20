import pool from '../config/db.js';

export const getPatients = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM patients');
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const addPatient = async (req, res, next) => {
  try {
    const { name, age, address } = req.body;
    const result = await pool.query(
      'INSERT INTO patients (name, age, address) VALUES ($1, $2, $3) RETURNING *',
      [name, age, address]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
