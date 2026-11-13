import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextField } from './TextField'

const meta = {
  title: 'Componentes/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: { label: 'Correo electrónico', placeholder: 'nombre@correo.com', type: 'email' },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de texto con etiqueta visible siempre. La ayuda y el error se conectan con `aria-describedby`, y el error se anuncia con `role="alert"`.',
      },
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithHint: Story = { name: 'Con ayuda', args: { hint: 'Te enviaremos el recibo a este correo.' } }
export const WithError: Story = {
  name: 'Con error',
  args: { defaultValue: 'mariana@', error: 'Escribe un correo completo, por ejemplo nombre@correo.com.' },
}
export const Required: Story = { name: 'Requerido', args: { required: true } }
export const Disabled: Story = { name: 'Deshabilitado', args: { disabled: true, defaultValue: 'mariana@correo.com' } }
