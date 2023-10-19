import { NextRequest, NextResponse } from "next/server";
import customDB from "@/app/lib/db";
import { order } from "@/app/lib/types";

let items: order[] = [];
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    items = await customDB.getAllRecords();
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ status: 500 }));
  }
  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
