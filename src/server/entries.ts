// Populated automatically during the build phase
export const entries = (await Promise.all([
  // main
  import("../entries/main/server.ts"),
])).map(({ server }) => server);
