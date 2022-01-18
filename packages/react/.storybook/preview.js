import { useEffect } from 'react'
import {} from '@storybook/core-client'

import { setTheme } from '@landing-jobs/neon'

import '../styles.css'
import '@landing-jobs/neon/dist/colors.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'tuftsBlue',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['tuftsBlue', 'ripePlum', 'puertoRico'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [
  (Story, { globals: { theme: themeName } }) => {
    useEffect(() => {
      setTheme(themeName)
    }, [themeName])

    return <Story />
  },
]
