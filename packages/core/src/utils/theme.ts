import { ColorPriority, PrimaryColor } from './colors'

export type PriorityColorCssVar<P extends ColorPriority> = `--color-${P}${
  | '-xLight'
  | '-light'
  | '-mLight'
  | ''
  | '-mDark'
  | '-dark'
  | '-xDark'}`

export type PrioritySlice<P extends ColorPriority> = {
  [cssVar in PriorityColorCssVar<P>]: string
}

export type PriorityThemeSlices = {
  [key in ColorPriority]: PrioritySlice<key>
}

export interface Theme extends PriorityThemeSlices {
  background: {
    '--color-bg-colored': string
  }
}

export const colorMappings: Record<
  PrimaryColor,
  {
    [key in ColorPriority]: PrimaryColor
  }
> = {
  tuftsBlue: {
    primary: 'tuftsBlue',
    secondary: 'puertoRico',
    other: 'ripePlum',
  },
  ripePlum: {
    primary: 'ripePlum',
    secondary: 'puertoRico',
    other: 'tuftsBlue',
  },
  puertoRico: {
    primary: 'puertoRico',
    secondary: 'tuftsBlue',
    other: 'ripePlum',
  },
}

export const themeSliceFromPrimary = <P extends ColorPriority>(color: PrimaryColor, priority: P) =>
  ({
    [`--color-${priority}-xLight`]: `var(--color-${colorMappings[color][priority]}-xLight)`,
    [`--color-${priority}-light`]: `var(--color-${colorMappings[color][priority]}-light)`,
    [`--color-${priority}-mLight`]: `var(--color-${colorMappings[color][priority]}-mLight)`,
    [`--color-${priority}`]: `var(--color-${colorMappings[color][priority]})`,
    [`--color-${priority}-mDark`]: `var(--color-${colorMappings[color][priority]}-mDark)`,
    [`--color-${priority}-dark`]: `var(--color-${colorMappings[color][priority]}-dark)`,
    [`--color-${priority}-xDark`]: `var(--color-${colorMappings[color][priority]}-xDark)`,
  } as PrioritySlice<P>)

const themes: { [key in PrimaryColor]: Theme } = {
  tuftsBlue: {
    primary: themeSliceFromPrimary('tuftsBlue', 'primary'),
    secondary: themeSliceFromPrimary('tuftsBlue', 'secondary'),
    other: themeSliceFromPrimary('tuftsBlue', 'other'),
    background: {
      '--color-bg-colored': 'var(--color-tuftsBlue-xLight)',
    },
  },
  ripePlum: {
    primary: themeSliceFromPrimary('ripePlum', 'primary'),
    secondary: themeSliceFromPrimary('ripePlum', 'secondary'),
    other: themeSliceFromPrimary('ripePlum', 'other'),
    background: {
      '--color-bg-colored': 'var(--color-ripePlum-xLight)',
    },
  },
  puertoRico: {
    primary: themeSliceFromPrimary('puertoRico', 'primary'),
    secondary: themeSliceFromPrimary('puertoRico', 'secondary'),
    other: themeSliceFromPrimary('puertoRico', 'other'),
    background: {
      '--color-bg-colored': 'var(--color-puertoRico-xLight)',
    },
  },
}

// todo type this better
export const setTheme = (primaryColor: PrimaryColor) => {
  if (themes[primaryColor] !== undefined) {
    const root = document.querySelector(':root') as HTMLElement
    Object.values(themes[primaryColor]).forEach((themeSlice) =>
      Object.entries(themeSlice).map(([key, value]) => root.style.setProperty(key, value as string))
    )
  }
}

export default themes
