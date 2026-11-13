import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from 'react'
import { cx } from '../../utils/cx'
import './Checkbox.css'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode
  /** Texto secundario bajo la etiqueta. */
  description?: ReactNode
  ref?: Ref<HTMLInputElement>
}

/** Casilla nativa con estilo propio: conserva teclado, formularios y lector de pantalla. */
export function Checkbox({ label, description, id, className, ref, ...rest }: CheckboxProps) {
  const autoId = useId()
  const inputId = id ?? `mr-check-${autoId}`
  const descId = description ? `${inputId}-desc` : undefined

  return (
    <div className={cx('mr-checkbox', className)}>
      <input ref={ref} id={inputId} type="checkbox" className="mr-checkbox__input" aria-describedby={descId} {...rest} />
      <div className="mr-checkbox__text">
        <label htmlFor={inputId} className="mr-checkbox__label">
          {label}
        </label>
        {description && (
          <p id={descId} className="mr-checkbox__desc">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
