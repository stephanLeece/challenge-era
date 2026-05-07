import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const proxyPath = env.VITE_HUNQZ_PROXY_PATH ?? "/hunqz";
    return {
        plugins: [react()],
        server: {
            proxy: {
                [proxyPath]: {
                    target: "https://www.hunqz.com",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(new RegExp(`^${proxyPath}`), "")
                }
            }
        }
    };
});
