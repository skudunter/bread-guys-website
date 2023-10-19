import { NextRequest, NextResponse } from "next/server";
import { RateLimiter } from "limiter";
import customDB from "@/app/lib/db";

const limiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hour",
  fireImmediately: true,
});

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("connection to handleSubmit made");

  const { email, mobileNumber, address, numberOfLoaves } = await req.json();
  if (email && mobileNumber && address && numberOfLoaves) {
    const remainingRequests = await limiter.removeTokens(1);
    if (remainingRequests > 0) {
      customDB.insertNewRecord(email, mobileNumber, address, numberOfLoaves);
    } else {
      console.log("Tokens are up");
      return NextResponse.json({ status: 429 });
    }
  } else {
    return NextResponse.json({ status: 505 });
  }
  return NextResponse.json({
    status: 200,
  });
}
