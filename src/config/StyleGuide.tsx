
export interface ThemeProps {
  idx: number,
  main: string,
  secondary: string,
  tertiary: string,
  shadeMain: string,
  shadeSecondary: string,
}

export type StyleGuideProps = {
  themeA: ThemeProps,
  themeB: ThemeProps,
  themeC: ThemeProps,
  themeD: ThemeProps,
  themeE: ThemeProps,
  disabled: string,
} 

const StyleGuide: StyleGuideProps = {
  themeA: {
    idx: 0,
    main: "#29304D",
    secondary: "#F76B6B",
    tertiary: "#8D91A1",
    shadeMain: "#20263d",
    shadeSecondary: "#99a2c9",
  } as ThemeProps,
  
  themeB: {
    idx: 1,
    main: "#e63458",
    secondary: "#f7c70e",
    tertiary: "#33fe5f",
    shadeMain: "#b82946",
    shadeSecondary: "#99e4fd",
    // main: "#FE5E33",
    // secondary: "#c5c963",
    // tertiary: "#33fe5f",
    // shadeMain: "#e5522a",
    // shadeSecondary: "#99e4fd",
  } as ThemeProps,
  
  themeC: {
    idx: 2,
    // main: "#51a312",
    // secondary: "#29304D",
    // tertiary: "#8D91A1",
    // shadeMain: "#489210",
    // shadeSecondary: "#F7c56e",
    main: "#99ba31",
    secondary: "#247e2c",
    tertiary: "#8D91A1",
    shadeMain: "#7a9427",
    shadeSecondary: "#F7c56e",
  } as ThemeProps,
  
  themeD: {
    idx: 3,
    main: "#4c4b7f",
    secondary: "#8ab6ed",
    tertiary: "#8D91A1",
    shadeMain: "#37315A",
    shadeSecondary: "#d8a772",
  } as ThemeProps,
  
  themeE: {
    idx: 4,
    main: "#00ACC1",
    secondary: "#FFC400",
    tertiary: "#8D91A1",
    shadeMain: "#0096a7",
    shadeSecondary: "#fccfc5",
  } as ThemeProps,
  disabled: "#a9acb7",
}

export default StyleGuide;

// "#242E58"