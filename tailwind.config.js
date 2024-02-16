/** @type {import('tailwindcss').Config} */

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./sections/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      DEFAULT: ["var(--fontStyle)", 'sans'],
    },
    colors: {
      primary: "var(--primaryColor)",
      secondary: "var(--secondaryColor)",
      // Add other dynamic colors here
    },
  },
};
export const plugins = [];
