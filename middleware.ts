import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  
  const url = request.url;

  if (url.includes("/admin")) {
    //secure the access to the admin page by checking cookie
    if (request.cookies.get(process.env.COOKIE_NAME!)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect("https://bread-people.vercel.app/");
    }
  }

  if (
    origin?.includes("localhost:3000") ||
    origin?.includes("https://bread-people.vercel.app/") || true
  ) {
    return NextResponse.next();
  } else {
    return NextResponse.json({
      error: "Invalid origin",
    });
  }
}

export const config = {
  matcher: ["/api/:path*", "/admin/"],
};
