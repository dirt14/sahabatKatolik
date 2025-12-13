import "server-only";
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_sahabatkatolik',
  password: 'Dimaspostgre123',
  port: 5432,
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (date) {
      const result = await pool.query('SELECT bacaan1, bacaan2, injil FROM bacaan WHERE tanggal = $1', [date]);
      return Response.json(result.rows[0] || null);
    } else {
      const result = await pool.query('SELECT * FROM bacaan ORDER BY id DESC');
      return Response.json(result.rows);
    }
  } catch (e) {
    const error = e as Error;
    return Response.json({ error: error.message }, { status: 500 });
  }
}
