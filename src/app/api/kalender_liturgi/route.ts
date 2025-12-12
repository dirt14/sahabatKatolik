import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "db_sahabatkatolik",
  password: "Dimaspostgre123",
  port: 5432,
});

export async function GET() {
  try {
    const result = await pool.query(
      `SELECT 
        tanggal,
        peringatan_hari,
        warna_liturgi,
        bacaan1,
        bacaan2,
        mazmur,
        injil
       FROM kalender_liturgi
       WHERE tanggal = CURRENT_DATE
       LIMIT 1`
    );

    if (result.rows.length === 0) {
      return NextResponse.json({
        tanggal: new Date().toISOString().split("T")[0],
        peringatan_hari: "Hari Biasa",
        warna_liturgi: "hijau",
        bacaan1: null,
        bacaan2: null,
        mazmur: null,
        injil: null,
      });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    const err = error as Error;
    console.error(err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
