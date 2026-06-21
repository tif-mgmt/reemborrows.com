/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // DREEM 2025 / Reem Borrows brand palette (from official styleguide)
        ocean: "#3B5065",      // Ocean Blue — primary, authority
        oceandark: "#283848",  // deeper shade for text/footer
        cream: "#DBC6AD",      // Cream Pastel — warm background accent
        creamlight: "#F4EDE2", // lighter tint, page background
        rose: "#DAB1AD",       // Rose Pastel — accent, CTAs
        rosedeep: "#BD8C88",   // deeper rose for hover states
        fog: "#E2E2E2",        // Gray
        ink: "#23262B",        // body copy near-black
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: ".22em",
      },
    },
  },
  plugins: [],
};
