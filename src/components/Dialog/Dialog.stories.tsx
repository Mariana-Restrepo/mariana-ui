import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog } from './Dialog'
import { Button } from '../Button/Button'
import { TextField } from '../TextField/TextField'

const meta = {
  title: 'Componentes/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: { open: false, onClose: () => {}, title: '' },
  parameters: {
    docs: {
      description: {
        component:
          'Modal sobre `<dialog>` nativo: atrapa el foco, cierra con **Esc** o clic fuera, y devuelve el foco al botón que lo abrió.',
      },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Confirm: Story = {
  name: 'Confirmación',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Eliminar venta</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="¿Eliminar esta venta?"
          description="La venta del 12 de noviembre por $ 85.000 se eliminará. Esta acción no se puede deshacer."
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button variant="danger" onClick={() => setOpen(false)}>Sí, eliminar</Button>
            </>
          }
        />
      </>
    )
  },
}

export const WithForm: Story = {
  name: 'Con formulario',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Nuevo cliente</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Nuevo cliente"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={() => setOpen(false)}>Guardar cliente</Button>
            </>
          }
        >
          <div style={{ display: 'grid', gap: 16 }}>
            <TextField label="Nombre" required />
            <TextField label="Teléfono" type="tel" hint="Opcional" />
          </div>
        </Dialog>
      </>
    )
  },
}
