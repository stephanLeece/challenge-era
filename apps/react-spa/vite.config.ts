import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const proxyPath = env.VITE_HUNQZ_PROXY_PATH ?? "/hunqz";

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        "@ui": path.resolve(__dirname, "../../packages/ui/src")
      }
    },

    server: {
      proxy: {
        [proxyPath]: {
          target: "https://www.hunqz.com",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${proxyPath}`), "")
        }
      }
    }
  };
});