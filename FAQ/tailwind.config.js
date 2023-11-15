/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./javascript/*.js", "./components/*.{html,js}", "./pages/*.{html,js}"],
   theme: {
      extend: {
         colors: {
            "primary-light": "#ececec",
            primary: "#bababa",
            "primary-dark": "#8a8a8a",
         },
         fontFamily: {
            brand: "Pacifico",
            text: "Source Sans Pro",
            title: "DynaPuff",
         },
         screens: {
            xsm: "460px",
         },
      },
   },
   plugins: [],
};
