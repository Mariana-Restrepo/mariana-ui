import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from '../../utils/cx'
import './Badge.css'

export type BadgeTone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'accent'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone
  /** Muestra un punto antes del texto (útil para estados). */
  dot?: boolean
  children: ReactNode
}

/** Etiqueta corta de estado o categoría. El color nunca es la única señal: siempre lleva texto. */
export function Badge({ tone = 'neutral', dot = false, className, children, ...rest }: BadgeProps) {
  return (
    <span className={cx('mr-badge', `mr-badge--${tone}`, className)} {...rest}>
      {dot && <span className="mr-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  )
}
