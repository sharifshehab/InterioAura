/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#ABEF5F',
                primaryV2: '#ABEF5F80',
                primaryV3: '#ABEF5F33',
                secondary: '#212121',
                secondaryV2: '#494949',
                plainText: '#737373'
            }
        },
    },
    plugins: [],
}