import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("connection on POST");
  const { email, mobileNumber, address, numberOfLoaves } = await req.json();

  return NextResponse.json({
    status: 200,
  });
}
