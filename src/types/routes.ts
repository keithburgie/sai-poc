export const ROUTES = {
  INDEX: '/',
  WELCOME: '/:clientId/welcome',
  SURVEY: '/:clientId/survey',
  COMPLETION: '/:clientId/completion'
} as const;

export type RouteKeys = keyof typeof ROUTES;