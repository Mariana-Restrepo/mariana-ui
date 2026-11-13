import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from '../../utils/cx'
import './Card.css'

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: ReactNode
  /** Nivel del encabezado del título, para respetar la jerarquía de la página. */
  headingLevel?: 2 | 3 | 4
  description?: ReactNode
  /** Contenido extra junto al título (por ejemplo, un Badge). */
  meta?: ReactNode
  /** Zona inferior para acciones. */
  footer?: ReactNode
  /** Resalta la tarjeta al pasar el mouse (cuando toda la tarjeta lleva a algún sitio). */
  interactive?: boolean
}

export function Card({
  title,
  headingLevel = 3,
  description,
  meta,
  footer,
  interactive = false,
  className,
  children,
  ...rest
}: CardProps) {
  const Heading = `h${headingLevel}` as const
  return (
    <article className={cx('mr-card', interactive && 'mr-card--interactive', className)} {...rest}>
      {(title || meta) && (
        <header className="mr-card__header">
          {title && <Heading className="mr-card__title">{title}</Heading>}
          {meta}
        </header>
      )}
      {description && <p className="mr-card__description">{description}</p>}
      {children && <div className="mr-card__body">{children}</div>}
      {footer && <footer className="mr-card__footer">{footer}</footer>}
    </article>
  )
}
