import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from 'react'
import { cx } from '../../utils/cx'
import './TextField.css'

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Etiqueta visible. Siempre requerida: el placeholder no reemplaza la etiqueta. */
  label: string
  /** Texto de ayuda bajo el campo. */
  hint?: ReactNode
  /** Mensaje de error. Si existe, el campo se marca como inválido. */
  error?: ReactNode
  ref?: Ref<HTMLInputElement>
}

export function TextField({ label, hint, error, required, id, className, ref, ...rest }: TextFieldProps) {
  const autoId = useId()
  const inputId = id ?? `mr-field-${autoId}`
  const hintId = hint ? `${inputId}-hint` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cx('mr-field', error ? 'mr-field--invalid' : undefined, className)}>
      <label className="mr-field__label" htmlFor={inputId}>
        {label}
        {required && (
          <span className="mr-field__required" aria-hidden="true">
            {' '}*
          </span>
        )}
      </label>
      <input
        ref={ref}
        id={inputId}
        className="mr-field__input"
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {hint && (
        <p id={hintId} className="mr-field__hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mr-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
