// start-avoid-tw-purge

export const colorClasses = [
  'text-primary',
  'text-secondary',
  'text-other',
  'text-info',
  'text-error',
  'text-success',
  'text-warning',
]

export const bgClasses = ['bg-primary', 'bg-secondary', 'bg-other', 'bg-info', 'bg-error', 'bg-success', 'bg-warning']

// end-avoid-tw-purge

export const bgHoverClasses = (
  { outline = false }: { outline?: boolean } = {
    outline: false,
  }
) =>
  outline
    ? {
        primary: 'hover:bg-primary',
        secondary: 'hover:bg-secondary',
        other: 'hover:bg-other',
        info: 'hover:bg-info',
        error: 'hover:bg-error',
        success: 'hover:bg-success',
        warning: 'hover:bg-warning',
      }
    : {
        primary: 'hover:bg-primary-mDark',
        secondary: 'hover:bg-secondary-mDark',
        other: 'hover:bg-other-mDark',
        info: 'hover:bg-info-hover',
        error: 'hover:bg-error-hover',
        success: 'hover:bg-success-hover',
        warning: 'hover:bg-warning-hover',
      }

export const bgActiveClasses = (
  { outline = false }: { outline?: boolean } = {
    outline: false,
  }
) =>
  outline
    ? {
        primary: 'active:bg-primary-mDark',
        secondary: 'active:bg-secondary-mDark',
        other: 'active:bg-other-mDark',
        info: 'active:bg-info-active',
        error: 'active:bg-error-active',
        success: 'active:bg-success-active',
        warning: 'active:bg-warning-active',
      }
    : {
        primary: 'active:bg-primary-dark',
        secondary: 'active:bg-secondary-dark',
        other: 'active:bg-other-dark',
        info: 'active:bg-info-active',
        error: 'active:bg-error-active',
        success: 'active:bg-success-active',
        warning: 'active:bg-warning-active',
      }

export const borderActiveClasses = {
  primary: 'active:border-primary-mDark',
  secondary: 'active:border-secondary-mDark',
  other: 'active:border-other-mDark',
  info: 'active:border-info-active',
  error: 'active:border-error-active',
  success: 'active:border-success-active',
  warning: 'active:border-warning-active',
}

export const colorActiveClasses = {
  primary: 'active:text-primary-mDark',
  secondary: 'active:text-secondary-mDark',
  other: 'active:text-other-mDark',
  info: 'active:text-info-active',
  error: 'active:text-error-active',
  success: 'active:text-success-active',
  warning: 'active:text-warning-active',
}

export const borderClasses = [
  'border-primary',
  'border-secondary',
  'border-other',
  'border-info',
  'border-error',
  'border-success',
  'border-warning',
]
