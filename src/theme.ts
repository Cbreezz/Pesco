import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e9d5ff",
      100: "#d8b4fe",
      200: "#c084fc",
      300: "#a855f7",
      400: "#9333ea",
      500: "#7e22ce",
      600: "#6b21a8",
      700: "#581c87",
      800: "#4b0082", // Main PESCO color
      900: "#3b0764",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#1a0e2d",
        color: "white",
      },
    },
  },
});

export default theme;
