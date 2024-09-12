import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        bgBlue: "#59636D",
        bgBeige: "#F4F0EC",
        darkBlue: "#292F36",
        darkGray: "#4D5053",
        gold: "#CDA274",
        black: "#222222",
        lightGray: "#E5E5E5",
        white: "#ffffff",
      },
      backgroundImage: {
        "custom-bg-home": "url('/images/bg-img.png')",
        "custom-bg-about": "url('/images/bg-about.png')",
        "custom-bg-services": "url('/images/bg-services.png')",
        "custom-bg-projects": "url('/images/bg-projects.png')",
        "custom-bg-contact": "url('/images/bg-contact.png')",
      },
      fontFamily: {
        jost: "Jost",
        dm: "DM Serif Display",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
