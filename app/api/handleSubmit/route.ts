import { NextRequest, NextResponse } from "next/server";
import { RateLimiter } from "limiter";
const limiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hour",
  fireImmediately: true,
});

export async function POST(req: NextRequest, res: NextResponse) {
  //write data to a db
  console.log("connection to handleSubmit made");

  const { email, mobileNumber, address, numberOfLoaves } = await req.json();
//   if (email && mobileNumber && address && numberOfLoaves) {
    const remainingRequests = await limiter.removeTokens(1);
    if (remainingRequests > 0) {
      console.log("request made");

    } else {
      console.log("Tokens are up");
      return NextResponse.json({ status: 429 });
    }
//   } else {
//     return NextResponse.json({ status: 505 });
//   }
  return NextResponse.json({
    status: 200,
  });
}
