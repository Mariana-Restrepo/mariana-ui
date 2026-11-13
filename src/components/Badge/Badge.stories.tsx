import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Componentes/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'Pagado', tone: 'success', dot: true },
  argTypes: {
    tone: { control: 'inline-radio', options: ['neutral', 'primary', 'success', 'warning', 'danger', 'accent'] },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllTones: Story = {
  name: 'Todos los tonos',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      <Badge>Borrador</Badge>
      <Badge tone="primary">Nuevo</Badge>
      <Badge tone="success" dot>Pagado</Badge>
      <Badge tone="warning" dot>Pendiente</Badge>
      <Badge tone="danger" dot>Vencido</Badge>
      <Badge tone="accent">Destacado</Badge>
    </div>
  ),
}
