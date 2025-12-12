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
    // First try to get quote for today's date
    let result = await pool.query('SELECT konten FROM quotes WHERE tanggal = CURRENT_DATE LIMIT 1');

    // If no quote for today, get the latest one
    if (result.rows.length === 0) {
      result = await pool.query('SELECT konten FROM quotes ORDER BY tanggal DESC LIMIT 1');
    }

    const konten = result.rows.length > 0 ? result.rows[0].konten : 'Tidak ada quote untuk hari ini.';
    return Response.json({ konten });
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
