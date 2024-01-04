import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

// Matcher allows you to filter Middleware to run (or not run like in th example) on specific paths. If you don't add any matcher. Middleware will be invoked for every route in your project.
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)']
}
