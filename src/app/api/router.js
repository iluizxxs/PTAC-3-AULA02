import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

export const pool = new Pool({
  user: 'xemtstaf',
  host: 'tuffi.db.elephantsql.com (tuffi-01)',
  database: 'xemtstaf',
  password: 'wz_J73s_tqJ44oUlbRjr3JoFq4zr8CHG',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function GET() {
    try {
      const data = await pool.query('SELECT * FROM db_ifms_campus');
      return NextResponse.json(data.rows);
    } catch (error) {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
  };