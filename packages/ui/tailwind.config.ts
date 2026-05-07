import type { Config } from "tailwindcss";
import { colors } from "./src/tokens/colors";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: colors.background,
        text: colors.text,
      },
    },
  },
  plugins: [],
} satisfies Config;