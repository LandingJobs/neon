import { FC, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

import type { Variant } from '@landing-jobs/neon'
import { colorActiveClasses } from './classes'

export type Props = {
  variant?: Variant
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ variant = 'primary', className, children, ...props }) => (
  <button
    className={clsx(
      'bg-none hover:underline transition-colors duration-100',
      `text-${variant}`,
      colorActiveClasses[variant],

      className
    )}
    {...props}
  >
    {children}
  </button>
)

export default Button
