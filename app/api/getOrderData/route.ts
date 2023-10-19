import { NextRequest, NextResponse } from "next/server";
import { open } from "sqlite";
import  sqlite3 from "sqlite3";
let db: any = null;
type order = {
  email: string;
  mobileNumber: number;
  adddress: string;
  numberOfLoaves: number;
};

let orders: order[] = [];
export async function GET(req: NextRequest, res: NextResponse) {
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./orders.db", // Specify the database file path
      driver:sqlite3.Database
    });
  }
  const items = await db.all("SELECT * FROM orders");
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
