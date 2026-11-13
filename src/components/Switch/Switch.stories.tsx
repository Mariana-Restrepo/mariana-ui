import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Switch } from './Switch'

const meta = {
  title: 'Componentes/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: { label: 'Notificaciones', onCheckedChange: fn() },
  parameters: {
    docs: {
      description: {
        component:
          'Para ajustes que se aplican **de inmediato** (encendido/apagado). Si el cambio necesita confirmarse con un botón, usa `Checkbox`.',
      },
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = { name: 'Apagado' }
export const On: Story = { name: 'Encendido', args: { defaultChecked: true } }
export const Disabled: Story = { name: 'Deshabilitado', args: { disabled: true } }
