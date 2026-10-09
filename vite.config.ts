import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins: Plugin[] = [react(), expressPlugin()];
  // Dev-only bundle report. Does not change emitted JS. Set ANALYZE=1.
  if (process.env.ANALYZE === "1") {
    const { visualizer } = await import("rollup-plugin-visualizer");
    plugins.push(
      visualizer({
        filename: "perf/bundle-stats.json",
        template: "raw-data",
        gzipSize: true,
        brotliSize: true,
      }) as Plugin,
      visualizer({
        filename: "perf/bundle-treemap.html",
        template: "treemap",
        gzipSize: true,
        brotliSize: true,
      }) as Plugin,
    );
  }

  return {
  server: {
    host: "::",
    port: 8080,
    fs: {
      // index.html and public/ live at repo root — must be allowed alongside client/
      allow: [
        path.resolve(__dirname),
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
        path.resolve(__dirname, "public"),
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/react-dom/") ||
            id.includes("/node_modules/react-router/") ||
            id.includes("/node_modules/react-router-dom/") ||
            id.includes("/node_modules/@remix-run/router/") ||
            id.includes("/node_modules/scheduler/")
          ) {
            return "vendor";
          }
        },
      },
    },
  },
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
      // Ensure a single React copy is used to avoid invalid hook calls
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  };
});

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
