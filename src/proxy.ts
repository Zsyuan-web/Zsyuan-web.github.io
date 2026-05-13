import createMiddleware from "next-intl/middleware";
import { routing } from "../i18n/routing";

// IP-based geolocation can be integrated here via Vercel's request.geo
// or a third-party API to determine locale from visitor location
export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
