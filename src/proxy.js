import { NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (user) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/books/:path*", "/my-profile"],
};
