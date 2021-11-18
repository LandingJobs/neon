import { FC, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import type { Variant } from '@landing-jobs/neon'
import { bgActiveClasses, bgHoverClasses, borderActiveClasses } from './classes'

export type Props = {
  variant?: Variant
  outline?: boolean
  small?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({
  variant = 'primary',
  outline = false,
  small = false,

  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-full uppercase border-2 transition-colors duration-100',
        outline
          ? `hover:text-white text-${variant} border-${variant} ${borderActiveClasses[variant]}`
          : `text-white border-transparent bg-${variant}`,
        small ? 'text-xs' : null,

        bgHoverClasses({ outline })[variant],
        bgActiveClasses({ outline })[variant],

        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
