import plugin, { TailwindPlugin } from 'tailwindcss/plugin'

const checkbox: TailwindPlugin = plugin(({ addComponents, theme }) =>
  addComponents({
    '.checkbox': {
      color: theme('colors.primary.DEFAULT'),
      borderRadius: theme('borderRadius.sm'),
      borderWidth: theme('borderWidth.2'),
      '&:hover': {
        borderColor: theme('colors.primary'),
        cursor: theme('cursor.pointer'),
      },
      '&:focus': {
        '--tw-ring-color': 'currentColor',
      },
    },
  })
)

export default checkbox
