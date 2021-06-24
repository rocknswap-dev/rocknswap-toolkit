export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
}

const breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`)

const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
}

//   success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
//  warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",

export const shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active: '0px 0px 0px 1px #ab802e, 0px 0px 4px 8px rgba(245, 184, 67, 0.4)',
  success: '0px 0px 0px 1px #4caf50, 0px 0px 0px 4px rgba(76, 175, 80, 0.2)',
  warning: '0px 0px 0px 1px #f44336, 0px 0px 0px 4px rgba(244, 67, 54, 0.2)',
  focus: '0px 0px 0px 1px #ab802e, 0px 0px 0px 4px rgba(245, 184, 67, 0.6)',
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
}

const spacing = [0, 4, 8, 16, 24, 32, 48, 64]

const radii = {
  small: '4px',
  default: '16px',
  card: '24px',
  circle: '50%',
}

const zIndices = {
  dropdown: 10,
  modal: 100,
}

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
}
