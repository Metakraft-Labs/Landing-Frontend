/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                encodeSans: ["Encode Sans Semi Expanded", "sans-serif"],
                spaceGrotesk: ["Space Grotesk", "sans-serif"],
                epilogue: ["Epilogue", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                lato: ["Lato", " sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                robotoMono: ["Roboto Mono", "monospace"],
                sofiaSans: ["Sofia Sans", "sans-serif"],
                sora: ["Sora", "sans-serif"],
            },
        },
        screens: {
            xs: { min: "310px", max: "640px" },
            ss: { min: "640px", max: "768px" },
            sm: { min: "768px", max: "1060px" },
            md: { min: "1060px", max: "1200px" },
            lg: { min: "1200px", max: "1700px" },
            xl: "1700px",
        },
    },

    plugins: [],
};
