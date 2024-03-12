/**
 * An array of routes that are accessible for public
 * No Authentication Needed
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes use for authentication
 * This routes will redirect logged in users to /settings.ts
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * This prefix for API authentication routes
 * Routes that start with this prefix are use for API
 * authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
