import { NextRequest, NextResponse } from "next/server";
import customDB from "@/app/lib/db";
import { order } from "@/app/lib/types";

let orders: order[] = [];
export async function GET(req: NextRequest, res: NextResponse) {
  const items = await customDB.getAllRecords();
  
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
