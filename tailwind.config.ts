import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          100: "#000405",
          200: "#00070A",
          300: "#000204",
          400: "#000A0F",
          500: "#000C12",
          600: "#00111A",
          700: "#001119",
          800: "#0D161B",
          900: "#0D1D25",
          1000: "#192227",
        }
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
        button: 'var(--font-poppins)'
      }

    },
  },
  plugins: [],
}
export default config
