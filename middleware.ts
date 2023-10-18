import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  console.log(origin);

  const url = request.url;

  if (
    origin?.includes("localhost:3000") ||
    origin?.includes("https://bread-people.vercel.app/")
  ) {
    if (url.includes("/admin")) {
      if (request.cookies.get("isAdmin")) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect("https://bread-people.vercel.app/");
      }
    } else {
      return NextResponse.next();
    }
  } else {
    return NextResponse.json({
      error: "Invalid origin",
    });
  }
}

export const config = {
  matcher: ["/api/:path*", "/admin/"],
};
