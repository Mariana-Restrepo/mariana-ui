import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { cx } from '../../utils/cx'
import './Tabs.css'

export interface TabItem {
  id: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  /** Nombre accesible del grupo de pestañas. */
  label: string
  /** Pestaña activa (modo controlado). */
  value?: string
  /** Pestaña inicial (modo no controlado). */
  defaultValue?: string
  onValueChange?: (id: string) => void
  className?: string
}

/**
 * Pestañas según el patrón WAI-ARIA "Tabs with automatic activation":
 * ← → recorren las pestañas, Inicio/Fin saltan a los extremos, y solo la
 * pestaña activa está en el orden de tabulación (roving tabindex).
 */
export function Tabs({ items, label, value, defaultValue, onValueChange, className }: TabsProps) {
  const baseId = useId()
  const firstEnabled = items.find((i) => !i.disabled)?.id
  const [internal, setInternal] = useState(defaultValue ?? firstEnabled)
  const active = value ?? internal
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  const select = (id: string) => {
    if (value === undefined) setInternal(id)
    onValueChange?.(id)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const enabled = items.filter((i) => !i.disabled)
    const index = enabled.findIndex((i) => i.id === active)
    let next: TabItem | undefined
    if (e.key === 'ArrowRight') next = enabled[(index + 1) % enabled.length]
    else if (e.key === 'ArrowLeft') next = enabled[(index - 1 + enabled.length) % enabled.length]
    else if (e.key === 'Home') next = enabled[0]
    else if (e.key === 'End') next = enabled[enabled.length - 1]
    if (!next) return
    e.preventDefault()
    select(next.id)
    tabRefs.current.get(next.id)?.focus()
  }

  return (
    <div className={cx('mr-tabs', className)}>
      <div role="tablist" aria-label={label} className="mr-tabs__list" onKeyDown={onKeyDown}>
        {items.map((item) => {
          const selected = item.id === active
          return (
            <button
              key={item.id}
              ref={(el) => {
                if (el) tabRefs.current.set(item.id, el)
                else tabRefs.current.delete(item.id)
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              className="mr-tabs__tab"
              onClick={() => select(item.id)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={item.id !== active}
          tabIndex={0}
          className="mr-tabs__panel"
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
