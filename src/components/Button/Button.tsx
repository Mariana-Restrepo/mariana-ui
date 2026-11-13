import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import { cx } from '../../utils/cx'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual. `primary` para la acción principal de la vista (una sola). */
  variant?: ButtonVariant
  size?: ButtonSize
  /** Muestra un indicador de carga y desactiva el botón sin perder el foco. */
  loading?: boolean
  /** Ícono antes del texto. */
  iconStart?: ReactNode
  /** Ícono después del texto. */
  iconEnd?: ReactNode
  /** Ocupa todo el ancho disponible. */
  fullWidth?: boolean
  ref?: Ref<HTMLButtonElement>
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  iconStart,
  iconEnd,
  fullWidth = false,
  disabled,
  type = 'button',
  className,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx('mr-button', `mr-button--${variant}`, `mr-button--${size}`, fullWidth && 'mr-button--full', className)}
      disabled={disabled}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
      onClick={loading ? (e) => e.preventDefault() : onClick}
      {...rest}
    >
      {loading ? <span className="mr-button__spinner" aria-hidden="true" /> : iconStart}
      <span className="mr-button__label">{children}</span>
      {!loading && iconEnd}
    </button>
  )
}
