import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'
import { Badge } from '../Badge/Badge'
import { Button } from '../Button/Button'

const meta = {
  title: 'Componentes/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ maxWidth: 380 }}><Story /></div>],
  args: {
    title: 'Ventas de noviembre',
    description: 'Resumen de las ventas registradas este mes en tu negocio.',
    meta: <Badge tone="success" dot>+12%</Badge>,
    children: <p style={{ margin: 0, fontSize: 32, fontWeight: 650 }}>$ 4.280.000</p>,
    footer: (
      <>
        <Button size="sm">Ver detalle</Button>
        <Button size="sm" variant="ghost">Exportar</Button>
      </>
    ),
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Simple: Story = {
  name: 'Simple',
  args: { meta: undefined, children: undefined, footer: undefined },
}
export const Interactive: Story = { name: 'Interactiva', args: { interactive: true } }
