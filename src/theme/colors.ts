import { Colors } from "./types";

export const baseColors = {
  failure: '#f44336',
  primary: '#F5B843',
  primaryBright: '#f7c668',
  primaryDark: '#ab802e',
  secondary: '#7E3E2A',
  success: '#4caf50',
  warning: '#ff9800',
}

export const additionalColors = {
  binance: '#F0B90B',
  overlay: 'rgba(255, 255, 255, 0.3)',
}

export const lightColors = {
  ...baseColors,
  ...additionalColors,
  background: '#101010',
  backgroundDisabled: 'rgba(255, 255, 255, 0.12)',
  backgroundAlt: '#222222',
  cardBorder: '#383241',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#000',
  input: '#424242',
  inputSecondary: 'none',
  tertiary: '#424242',
  text: '#fff',
  textDisabled: 'rgba(255, 255, 255, 0.5)',
  textSubtle: '#f7c668',
  disabled: 'rgba(255, 255, 255, 0.3)',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
    cardHeader: 'linear-gradient(111.68deg, #f7c668 0%, #ab802e 100%)',
    blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
    violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
    violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  },
}

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#130906",
  backgroundDisabled: "rgba(255, 255, 255, 0.12)",
  backgroundAlt: "#26130d",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#000",
  input: "#633f36",
  inputSecondary: "#422a24",
  tertiary: "#633f36",
  text: "#fff",
  textDisabled: "rgba(255, 255, 255, 0.5)",
  textSubtle: "#d2b4ac",
  disabled: "rgba(255, 255, 255, 0.3)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(111.68deg, #f7c668 0%, #ab802e 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
