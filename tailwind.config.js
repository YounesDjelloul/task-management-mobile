/** @type {import('tailwindcss').Config} */
const {Colors} = require("./constants/Colors");
module.exports = {
    content: [
        "./App.tsx",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                'heading': ['Poppins-Bold', 'Poppins-SemiBold'],
                'body': ['Inter-Regular'],
                'button': ['Inter-Medium']
            },
            colors: Colors
        },
    },
    plugins: [],
}
