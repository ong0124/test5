import { createPool } from 'mysql2/promise';


const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

interface Options {
  query: string;
  values?: any[];
}

const pool = createPool({
  host: '18.180.90.233',
  user: 'qs-tech-remote',
  database: 'kinmentong',
  password: 'Qs202588',
  port:3306,
});

export const sql = async ({ query, values }: Options) => {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const [rows] = await pool.query(query, values);
      return rows;
    } catch (err: any) {
      console.error(`Database error (attempt ${attempt}):`, err.message);
      if (attempt === MAX_RETRIES) {
        throw new Error('Database query failed after multiple attempts');
      }
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    }
  }
};