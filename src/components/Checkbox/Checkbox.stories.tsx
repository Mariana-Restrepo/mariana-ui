import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Componentes/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { label: 'Acepto los términos y condiciones' },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Checked: Story = { name: 'Marcado', args: { defaultChecked: true } }
export const WithDescription: Story = {
  name: 'Con descripción',
  args: { label: 'Recibir novedades', description: 'Un correo al mes, sin spam.' },
}
export const Disabled: Story = { name: 'Deshabilitado', args: { disabled: true } }
