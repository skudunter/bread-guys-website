import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  //need api key to access
  const apiKey = process.env.API_KEY;
  
  const userApikey = req.headers.get('apiKey');
  console.log(userApikey);

  if (userApikey == apiKey) {
    console.log("request is valid");
  }
  console.log("connection on POST");
  const { email, mobileNumber, address, numberOfLoaves } = await req.json();

  return NextResponse.json({
    status: 200,
  });
}
