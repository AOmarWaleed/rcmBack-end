import pg from 'pg';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './env.js';


const { Pool } = pg;
// Set up the PostgreSQL connection
const pool = new Pool({
  user:  DB_USER,           // Database username
  host:  DB_HOST,         // Database host
  database:  DB_DATABASE,    // Database name
  password:  DB_PASSWORD,    // Database password
  port:  DB_PORT,                // Default PostgreSQL port
});


// Export the pool object to use it in other files
export default pool;