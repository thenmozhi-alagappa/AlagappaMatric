import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";

// The folder the site is served from. "/" locally and on the school's own domain;
// "npm run deploy" sets BASE_PATH=/AlagappaMatric/ for GitHub Pages (see tools/deploy-pages.sh).
const BASE = process.env.BASE_PATH || "/";

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

// Photos/audio/forms are written in the code as "/images/...", "/audio/..." and "/forms/...".
// When the site lives in a sub-folder (GitHub Pages), prefix those paths with the folder at build time.
const prefixPublicPaths = {
  name: "prefix-public-paths",
  apply: "build",
  transform(code, id) {
    if (BASE === "/" || !/\/src\/.*\.(js|jsx)$/.test(id.replace(/\\/g, "/"))) return null;
    return { code: code.replace(/(["'`])\/(images|audio|forms)\//g, `$1${BASE}$2/`), map: null };
  },
};

// GitHub Pages has no server-side routing: serve the app for unknown URLs (e.g. /contact)
// by copying index.html to 404.html.
const spaFallback = {
  name: "spa-404-fallback",
  apply: "build",
  closeBundle() {
    if (BASE !== "/") copyFileSync("dist/index.html", "dist/404.html");
  },
};

export default defineConfig({
  base: BASE,
  plugins: [react(), ignoreLockedFiles, prefixPublicPaths, spaFallback],
  // Wait until a file has stopped changing before reloading, so the browser never
  // receives a half-saved file (which showed up as a blank white page).
  server: { watch: { awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 } } },
});
