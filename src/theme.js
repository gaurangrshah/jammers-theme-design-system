import Color from "color";

export default {
  colors: {
    blue: "#505bda",
    blueDark: "#1a2849",
    blueLight: "#e3e5f9",
    pink: Color("#ffaac3")
      .lighten(0.125)
      .hex(),
    yellow: "#f6f078",
    yellowLight: Color("#f6f078")
      .lighten(0.275)
      .hex(),
    white: "#f2f2f2",
    purple: "#b063c5",
    primary: "#505bda"
  },
  fonts: {
    body: "Space Mono",
    heading: "PT Sans"
  },
  shadows: {
    smallLight: "0 2px 4px rgba(0, 0, 0, 0.03)",
    hoverShadow: "0px 20px 20px -19px blue",
    topDark: "1px -4px 12px -10px rgba(169,169,169,1);",
    textDark: "-1px -1px 5px rgba(169,169,169,0.55)",
    lineGradientBlueGreen:
      "linear-gradient(0deg,rgba(255,255,255, 0.7)  0%, rgba(80,91,218,1)"
  },
  borders: {
    default: "1px solid black",
    test: "1px solid red"
  },
  radii: {
    sm: "0.15rem",
    default: "0.2rem",
    lg: "0.25rem"
  }
};
