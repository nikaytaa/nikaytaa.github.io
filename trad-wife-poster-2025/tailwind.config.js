/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"], // Or wherever your HTML/JS files are
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'libre-caslon': ['Libre Caslon Text', 'serif'],
            },
        },
    },
    plugins: [],
}
