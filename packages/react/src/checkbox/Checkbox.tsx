import clsx from 'clsx'
import { FC, InputHTMLAttributes } from 'react'

export type Props = InputHTMLAttributes<HTMLInputElement>

const Checkbox: FC<Props> = ({ className, ...props }) => (
  <input type="checkbox" className={clsx('checkbox', className)} {...props} />
)

export default Checkbox
