// Populated automatically during the build phase by picking
// all server exports from 'src/entries/<entry_name>/server(/index)?.(js|ts)'
export const entries = (
  await Promise.all([
    // main
    import("../entries/main/server.ts"),
  ])
).map(({ server }) => server);
