import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/auth/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/workspace/:path*"],
};
