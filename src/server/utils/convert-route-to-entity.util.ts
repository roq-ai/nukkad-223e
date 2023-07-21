const mapping: Record<string, string> = {
  projects: 'project',
  ratings: 'rating',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
