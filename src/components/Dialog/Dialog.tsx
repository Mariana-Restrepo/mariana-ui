import { useEffect, useId, useRef, type ReactNode } from 'react'
import { cx } from '../../utils/cx'
import './Dialog.css'

export interface DialogProps {
  open: boolean
  /** Se llama al cerrar: botón ×, tecla Esc o clic fuera del diálogo. */
  onClose: () => void
  title: ReactNode
  description?: ReactNode
  /** Acciones del pie (normalmente Buttons). */
  footer?: ReactNode
  children?: ReactNode
  /** Cierra al hacer clic en el fondo oscuro. */
  closeOnBackdrop?: boolean
  className?: string
}

/**
 * Diálogo modal construido sobre <dialog> nativo: el navegador ya atrapa el foco,
 * vuelve inerte el resto de la página y cierra con Esc. Al cerrar, el foco
 * regresa al elemento que lo abrió.
 */
export function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  children,
  closeOnBackdrop = true,
  className,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const id = useId()
  const titleId = `${id}-title`
  const descId = description ? `${id}-desc` : undefined

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      returnFocus.current = document.activeElement as HTMLElement | null
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  // El evento "close" se dispara con Esc, con dialog.close() o con un <form method="dialog">.
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const handleClose = () => {
      returnFocus.current?.focus()
      if (open) onClose()
    }
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [open, onClose])

  return (
    <dialog
      ref={ref}
      className={cx('mr-dialog', className)}
      aria-labelledby={titleId}
      aria-describedby={descId}
      onClick={(e) => {
        // Un clic directamente sobre <dialog> (no sobre su contenido) es un clic en el fondo.
        if (closeOnBackdrop && e.target === e.currentTarget) onClose()
      }}
    >
      <div className="mr-dialog__panel">
        <header className="mr-dialog__header">
          <h2 id={titleId} className="mr-dialog__title">
            {title}
          </h2>
          <button type="button" className="mr-dialog__close" aria-label="Cerrar" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </header>
        {description && (
          <p id={descId} className="mr-dialog__description">
            {description}
          </p>
        )}
        {children && <div className="mr-dialog__body">{children}</div>}
        {footer && <footer className="mr-dialog__footer">{footer}</footer>}
      </div>
    </dialog>
  )
}
