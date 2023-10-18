import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin == "http://localhost:3000" || origin == "https://") {
    console.log(origin);
    return NextResponse.next();
  } else {
    return NextResponse.json({
      error: "Invalid origin",
    });
  }
}

export const config = {
  matcher: "/api/handleSubmit",
};
