import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from './Button'

const Plus = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const meta = {
  title: 'Componentes/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Guardar cambios', onClick: fn() },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Dispara una acción. Usa **un solo** `primary` por vista; `secondary` y `ghost` para acciones de menor peso; `danger` para acciones destructivas. Área táctil mínima de 40px.',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Danger: Story = { args: { variant: 'danger', children: 'Eliminar venta' } }
export const WithIcon: Story = { name: 'Con ícono', args: { iconStart: <Plus />, children: 'Nueva venta' } }
export const Loading: Story = { name: 'Cargando', args: { loading: true, children: 'Guardando…' } }
export const Disabled: Story = { name: 'Deshabilitado', args: { disabled: true } }

export const AllVariants: Story = {
  name: 'Todas las variantes',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button>Primario</Button>
      <Button variant="secondary">Secundario</Button>
      <Button variant="ghost">Fantasma</Button>
      <Button variant="danger">Peligro</Button>
      <Button size="sm">Pequeño</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
}
