import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On Windows, copying/renaming a large photo while the dev server runs can briefly
// lock the file (EBUSY). Without a listener, that watcher error crashes the server.
// This plugin just logs it and keeps going, so new images are still picked up.
const ignoreLockedFiles = {
  name: "ignore-locked-files",
  configureServer(server) {
    server.watcher.on("error", (err) => {
      if (err && (err.code === "EBUSY" || err.code === "EPERM")) {
        server.config.logger.warn(`[watch] skipped a locked file: ${err.path || err.filename || ""}`);
      } else {
        server.config.logger.error(String(err));
      }
    });
  },
};

export default defineConfig({
  plugins: [react(), ignoreLockedFiles],
  // Wait until a file has stopped changing before reloading, so the browser never
  // receives a half-saved file (which showed up as a blank white page).
  server: { watch: { awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 } } },
});
