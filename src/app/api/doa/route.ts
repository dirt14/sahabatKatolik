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
    const result = await pool.query('SELECT * FROM doa ORDER BY id DESC');
    return Response.json(result.rows);
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}