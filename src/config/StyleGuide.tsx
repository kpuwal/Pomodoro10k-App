
export interface ThemeProps {
  idx: number,
  main: string,
  secondary: string,
  tertiary: string,
  shadeMain: string,
  shadeSecondary: string,
};

export type StyleGuideProps = {
  themeA: ThemeProps,
  themeB: ThemeProps,
  themeC: ThemeProps,
  themeD: ThemeProps,
  themeE: ThemeProps,
} ;

export const StyleGuide: StyleGuideProps = {
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
    main: "#FE5E33",
    secondary: "#F76B6B",
    tertiary: "#8D91A1",
    shadeMain: "#20263d",
    shadeSecondary: "#99a2c9",
  } as ThemeProps,
  
  themeC: {
    idx: 2,
    main: "#FFC641",
    secondary: "#F76B6B",
    tertiary: "#8D91A1",
    shadeMain: "#20263d",
    shadeSecondary: "#99a2c9",
  } as ThemeProps,
  
  themeD: {
    idx: 3,
    main: "#BFEAF5",
    secondary: "#F76B6B",
    tertiary: "#8D91A1",
    shadeMain: "#20263d",
    shadeSecondary: "#99a2c9",
  } as ThemeProps,
  
  themeE: {
    idx: 4,
    main: "#442CB9",
    secondary: "#F76B6B",
    tertiary: "#8D91A1",
    shadeMain: "#20263d",
    shadeSecondary: "#99a2c9",
  } as ThemeProps,
}

// export default StyleGuide;

// "#242E58"