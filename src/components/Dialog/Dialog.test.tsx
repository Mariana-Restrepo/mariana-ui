import { useState } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dialog } from './Dialog'

function Example() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Eliminar venta</button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="¿Eliminar esta venta?"
        description="Esta acción no se puede deshacer."
      />
    </>
  )
}

describe('Dialog', () => {
  it('se abre con nombre y descripción accesibles', async () => {
    const user = userEvent.setup()
    render(<Example />)
    await user.click(screen.getByRole('button', { name: 'Eliminar venta' }))
    const dialog = screen.getByRole('dialog', { name: '¿Eliminar esta venta?' })
    expect(dialog).toHaveAttribute('open')
    expect(dialog).toHaveAccessibleDescription('Esta acción no se puede deshacer.')
  })

  it('al cerrar devuelve el foco al botón que lo abrió', async () => {
    const user = userEvent.setup()
    render(<Example />)
    const trigger = screen.getByRole('button', { name: 'Eliminar venta' })
    await user.click(trigger)
    await user.click(screen.getByRole('button', { name: 'Cerrar' }))
    await waitFor(() => expect(trigger).toHaveFocus())
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
