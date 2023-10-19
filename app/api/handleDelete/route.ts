import { NextRequest, NextResponse } from "next/server";
import customDB from "@/app/lib/db";
export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { ID } = await req.json();
    customDB.deleteRecord(ID);
    return NextResponse.json({
      status: 200,
    });
  } catch (e) {
    return NextResponse.json({
      status: 504,
    });
  }
}
