const colors = {
  silverSand: {
    xxDark: '#000000',
    xDark: '#4B4B4B',
    dark: '#797979',
    mDark: '#A2A2A2',
    base: '#C7C7C7',
    mLight: '#DADADA',
    light: '#EDEDED',
    xLight: '#F6F6F6',
  },
  puertoRico: {
    xDark: '#006C66',
    dark: '#008F88',
    mDark: '#00B1A8',
    base: '#00CFC5',
    mLight: '#54E2DB',
    light: '#BFF3F1',
    xLight: '#E3FAF9',
  },
  tuftsBlue: {
    xDark: '#003974',
    dark: '#00468E',
    mDark: '#005BB9',
    base: '#007EFF',
    mLight: '#2B92FC',
    light: '#7BBAFA',
    xLight: '#D8E9FB',
  },
  ripePlum: {
    xDark: '#380849',
    dark: '#5C0E77',
    mDark: '#871AAD',
    base: '#A729D2',
    mLight: '#CA30FF',
    light: '#DA94F2',
    xLight: '#F4D6FF',
    xxLight: '#FDF6FF',
  },
  flamingo: {
    xDark: '#931502',
    dark: '#BC1A02',
    mDark: '#D91F04',
    base: '#F51F00',
    mLight: '#FB563E',
    light: '#FA7B68',
    xLight: '#FBB5AA',
  },
  jaffa: {
    xDark: '#974800',
    dark: '#BD5C03',
    mDark: '#DE6B01',
    base: '#FF7A00',
    mLight: '#FD9535',
    light: '#FDAD64',
    xLight: '#FBD3AF',
  },
  starship: {
    xDark: '#A99500',
    dark: '#C8B100',
    mDark: '#E4CA03',
    base: '#FFE100',
    mLight: '#FFED64',
    light: '#FFF291',
    xLight: '#FFF8C4',
  },
  black: {
    mDark: '#000000',
    base: '#343434',
    mLight: '#797979',
  },
}

export type PrimaryColor = 'tuftsBlue' | 'puertoRico' | 'ripePlum'

export type ColorPriority = 'primary' | 'secondary' | 'other'
export const colorPriorities: ColorPriority[] = ['primary', 'secondary', 'other']

export const colorModifiers = ['xDark', 'dark', 'mDark', 'base', 'mLight', 'light', 'xLight']

export type Variant = 'primary' | 'secondary' | 'other' | 'error' | 'warning' | 'info' | 'success'

export default colors
