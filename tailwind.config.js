module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Futura", "Arial", "sans-serif"],
      mono: ["Lucida Console", "Courier", "monospace"],
      neueLight: ["Neue-Light"],
      neueRegular: ["Neue-Regular"],
      neueMedium: ["Neue-Medium"],
      neueBold: ["Neue-Bold"],
      futuraLight: ["Futura-Light"],
      foundersLight: ["FoundersLight"],
      founders: ["Founders"],
      ibm: ["IBM"],
      ibmLight: ["IBMLight"],
      sohneBuch: ["Sohne-Buch"], // light
      sohneFett: ["Sohne-Fett"], // très gras
      sohneKraftig: ["Sohne-Kraftig"], // gras
      sohneHalbfett: ["Sohne-Halbfett"], // gras moyen
      sohneLeicht: ["Sohne-Leicht"],
      sohneExtraleicht: ["Sohne-Extraleicht"],
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "2000px",
    },
    extend: {
      colors: {
        fullBlack: "#000000",
        black: "#282828",
        white: "#fcfbfa",
        beige: "#FFFFFF",
        gray: "#888888",
        blue: "#2677bb",
      },
      height: (theme) => ({
        "50vh": "50vh",
        "75vh": "75vh",
      }),
    },
  },
  plugins: [],
};
