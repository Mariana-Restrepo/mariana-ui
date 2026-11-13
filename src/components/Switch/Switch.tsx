import { useId, useState, type ButtonHTMLAttributes, type Ref } from 'react'
import { cx } from '../../utils/cx'
import './Switch.css'

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'role'> {
  label: string
  /** Modo controlado. */
  checked?: boolean
  /** Valor inicial en modo no controlado. */
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  ref?: Ref<HTMLButtonElement>
}

/** Interruptor de encendido/apagado con role="switch" (patrón WAI-ARIA). */
export function Switch({
  label,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  id,
  className,
  ref,
  ...rest
}: SwitchProps) {
  const autoId = useId()
  const switchId = id ?? `mr-switch-${autoId}`
  const [internal, setInternal] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const isOn = isControlled ? checked : internal

  const toggle = () => {
    const next = !isOn
    if (!isControlled) setInternal(next)
    onCheckedChange?.(next)
  }

  return (
    <div className={cx('mr-switch', className)}>
      <button
        ref={ref}
        id={switchId}
        type="button"
        role="switch"
        aria-checked={isOn}
        disabled={disabled}
        className="mr-switch__track"
        onClick={toggle}
        {...rest}
      >
        <span className="mr-switch__thumb" aria-hidden="true" />
      </button>
      <label htmlFor={switchId} className="mr-switch__label">
        {label}
      </label>
    </div>
  )
}
