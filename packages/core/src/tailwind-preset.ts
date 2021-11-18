import { TailwindConfig } from 'tailwindcss/tailwind-config'
// @ts-expect-error no type declarations for this
import forms from '@tailwindcss/forms'
import components from './components'

const config: TailwindConfig = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: ({ theme }) => ({
        silverSand: {
          xxDark: '#000000',
          xDark: '#4B4B4B',
          dark: '#797979',
          mDark: '#A2A2A2',
          DEFAULT: '#C7C7C7',
          mLight: '#DADADA',
          light: '#EDEDED',
          xLight: '#F6F6F6',
        },
        puertoRico: {
          xDark: '#006C66',
          dark: '#008F88',
          mDark: '#00B1A8',
          DEFAULT: '#00CFC5',
          mLight: '#54E2DB',
          light: '#BFF3F1',
          xLight: '#E3FAF9',
        },
        tuftsBlue: {
          xDark: '#003974',
          dark: '#00468E',
          mDark: '#005BB9',
          DEFAULT: '#007EFF',
          mLight: '#2B92FC',
          light: '#7BBAFA',
          xLight: '#D8E9FB',
        },
        ripePlum: {
          xDark: '#380849',
          dark: '#5C0E77',
          mDark: '#871AAD',
          DEFAULT: '#A729D2',
          mLight: '#CA30FF',
          light: '#DA94F2',
          xLight: '#F4D6FF',
          xxLight: '#FDF6FF',
        },
        flamingo: {
          xDark: '#931502',
          dark: '#BC1A02',
          mDark: '#D91F04',
          DEFAULT: '#F51F00',
          mLight: '#FB563E',
          light: '#FA7B68',
          xLight: '#FBB5AA',
        },
        jaffa: {
          xDark: '#974800',
          dark: '#BD5C03',
          mDark: '#DE6B01',
          DEFAULT: '#FF7A00',
          mLight: '#FD9535',
          light: '#FDAD64',
          xLight: '#FBD3AF',
        },
        starship: {
          xDark: '#A99500',
          dark: '#C8B100',
          mDark: '#E4CA03',
          DEFAULT: '#FFE100',
          mLight: '#FFED64',
          light: '#FFF291',
          xLight: '#FFF8C4',
        },
        black: {
          mDark: '#000000',
          DEFAULT: '#343434',
          mLight: '#797979',
        },

        primary: {
          xLight: 'var(--color-primary-xLight)',
          light: 'var(--color-primary-light)',
          mLight: 'var(--color-primary-mLight)',
          DEFAULT: 'var(--color-primary)',
          mDark: 'var(--color-primary-mDark)',
          dark: 'var(--color-primary-dark)',
          xDark: 'var(--color-primary-xDark)',
        },
        secondary: {
          xLight: 'var(--color-secondary-xLight)',
          light: 'var(--color-secondary-light)',
          mLight: 'var(--color-secondary-mLight)',
          DEFAULT: 'var(--color-secondary)',
          mDark: 'var(--color-secondary-mDark)',
          dark: 'var(--color-secondary-dark)',
          xDark: 'var(--color-secondary-xDark)',
        },
        other: {
          xLight: 'var(--color-other-xLight)',
          light: 'var(--color-other-light)',
          mLight: 'var(--color-other-mLight)',
          DEFAULT: 'var(--color-other)',
          mDark: 'var(--color-other-mDark)',
          dark: 'var(--color-other-dark)',
          xDark: 'var(--color-other-xDark)',
        },
        background: {
          colored: 'var(--color-bg-colored)',
        },

        success: {
          DEFAULT: '#00CFC5',
          hover: '#00B1A8',
          active: '#008F88',
        },
        warning: {
          DEFAULT: '#FFE100',
          hover: '#E4CA03',
          active: '#C8B100',
        },
        error: {
          DEFAULT: '#F51F00',
          hover: '#D91F04',
          active: '#BC1A02',
        },
        info: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-mDark)',
          active: 'var(--color-primary-dark)',
        },
      }),
    },
  },
  plugins: [forms, ...components],
}

export default config
