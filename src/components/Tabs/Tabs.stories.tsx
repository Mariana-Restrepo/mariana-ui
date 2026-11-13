import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from './Tabs'

const meta = {
  title: 'Componentes/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    label: 'Módulos del negocio',
    items: [
      { id: 'ventas', label: 'Ventas', content: 'Registra cada venta y mira el total del día.' },
      { id: 'gastos', label: 'Gastos', content: 'Controla los gastos fijos y variables.' },
      { id: 'caja', label: 'Caja', content: 'Abre y cierra la caja, y revisa diferencias.', disabled: true },
      { id: 'clientes', label: 'Clientes', content: 'Guarda los datos de tus clientes frecuentes.' },
    ],
  },
  parameters: {
    docs: {
      description: {
        component:
          'Patrón WAI-ARIA de pestañas con activación automática. Prueba con el teclado: **Tab** entra a la pestaña activa, **← →** cambian de pestaña, **Inicio/Fin** saltan a los extremos. Las pestañas deshabilitadas se saltan.',
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
