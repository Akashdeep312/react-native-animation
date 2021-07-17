import { createBox, createText, createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    secondry: "#0C0D34",
    text: "rgba(12, 13, 52,0.7)",
    secondryText: "rgba(12, 13, 52,0.5)",
    white: "white",
    grey: "rgba(12, 13, 52,0.05)",
    lightGrey: "#F4F0EF",
    danger: "#FF0058",
    darkGrey: "#8A8D90",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      fontFamily: "SFProDisplay-Bold",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      color: "secondry",
      fontFamily: "SFProDisplay-Bold",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: "secondry",
      fontFamily: "SFProDisplay-Bold",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,

      fontFamily: "SFProDisplay-Medium",
      color: "darkGrey",
    },
  },
});

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
