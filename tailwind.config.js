/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'admin-ui': "url('../src/adminuimockup.jpg')",
        'admin-ui-sm': "url('../src/adminuimockup-sm.jpg')",
        'di': "url('../src/dimockup.jpg')",
        'di-sm': "url('../src/dimockupsm.jpg')",
        'qsmockup': "url('../src/qsmockup.jpg')",
        'qsmockup-sm': "url('../src/qsmockupsm.jpg')",
        'qsmobile': "url('../src/qsmobile.jpg')",
        'qsmobile-sm': "url('../src/qsmobilesm.jpg')",
        'womanmockup': "url('../src/womanmockup.jpg')",
        'womanmockup-sm': "url('../src/womanmockupsm.jpg')",
      },

      colors: {
        'purple-1000': '#5E20BE',
      },
    },
  },
  plugins: [],
}

