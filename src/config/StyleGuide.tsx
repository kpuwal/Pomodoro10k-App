
interface ThemeProps {
  color: string,
  secondary: string,
  tertiary: string,
  shadeMain: string,
  shadeSecondary: string,
}

const StyleGuide = {
  palette: {
    main: {
      primary: "#29304D",
      secondary: "#F76B6B",
      tertiary: "#8D91A1",
    },
  },
  themeA: {
    color: "#29304D",
    secondary: "#F76B6B",
    tertiary: "#8D91A1",
    shadeMain: "#20263d",
    shadeSecondary: "#99a2c9",
  } as ThemeProps,
  themeB: {} as ThemeProps,
  themeC: {} as ThemeProps,
  themeD: {} as ThemeProps,
  themeE: {} as ThemeProps,
}

export default StyleGuide;

// "#242E58"