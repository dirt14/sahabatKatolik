import "server-only";
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_sahabatkatolik',
  password: 'Dimaspostgre123',
  port: 5432,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT now()');
    return Response.json({ status: 'connected', serverTime: result.rows[0] });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
