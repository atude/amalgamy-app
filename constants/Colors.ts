type ColorScheme = {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  tabIconDefault: string;
  tabIconSelected: string;
  bg: string;
  subheader: string;
  header: string;

  // Temp names for now
  grey2: string;
  lightgrey3: string;
  lightgrey2: string;
  yellow: string;
  red: string;
  darkgrey: string;
};

const Colors: Record<"light" | "dark", ColorScheme> = {
  light: {
    text: "#000",
    background: "#fff",
    primary: "#7442C8",
    secondary: "#7442C8",
    tabIconDefault: "#ccc",
    tabIconSelected: "#7442C8",
    bg: "#22252A",
    subheader: "#878E95",
    header: "#4A5056",
    grey2: "#AEB5BC",
    lightgrey2: "#E9ECEF",
    lightgrey3: "#F1F3F5",
    yellow: "#EECA74",
    red: "#CC4039",
    darkgrey: "#333333",
  },
  dark: {
    text: "#000",
    background: "#fff",
    primary: "#7442C8",
    secondary: "#7442C8",
    tabIconDefault: "#ccc",
    tabIconSelected: "#7442C8",
    bg: "#22252A",
    subheader: "#878E95",
    header: "#4A5056",
    grey2: "#AEB5BC",
    lightgrey2: "#E9ECEF",
    lightgrey3: "#F1F3F5",
    yellow: "#EECA74",
    red: "#CC4039",
    darkgrey: "#333333",
  },
};

export default Colors;
