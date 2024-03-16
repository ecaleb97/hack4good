/**
 * An array of routes that are public.
 * These routes are accessible by anyone, even users who are not logged in.
 */

export const publicRoutes = [
  "/",
  "/auth/new-verification",
]

/**
 * An array of routes that are private.
 * These routes are only accessible to users who are logged in.
 * @type {string[]}
 */

export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password"
]

export const apiAuthPrefix = "/api/auth"

/**
 * The default route to redirect to after a user logs in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"