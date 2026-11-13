import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Badge } from '../components/Badge/Badge'
import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'
import { Checkbox } from '../components/Checkbox/Checkbox'
import { Switch } from '../components/Switch/Switch'
import { Tabs } from '../components/Tabs/Tabs'
import { TextField } from '../components/TextField/TextField'

const meta = {
  title: 'Fundamentos/Minimal vs. Creativo',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'La misma pantalla, los mismos componentes y el mismo código. Solo cambia el atributo `data-style`: así un producto puede pasar de sobrio a expresivo sin reescribir la interfaz.',
      },
    },
  },
} satisfies Meta

export default meta

/** Pantalla de ejemplo: resumen de un pequeño negocio en una app móvil. */
function AppScreen() {
  const [notify, setNotify] = useState(true)
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--mr-color-text-muted)' }}>Hola, Mariana</p>
          <h2
            style={{
              margin: 0,
              fontFamily: 'var(--mr-font-heading)',
              fontWeight: 'var(--mr-heading-weight)' as unknown as number,
              letterSpacing: 'var(--mr-heading-tracking)',
              fontSize: 24,
            }}
          >
            Tu negocio hoy
          </h2>
        </div>
        <Badge tone="success" dot>
          Caja abierta
        </Badge>
      </header>

      <Card
        title="Ventas de hoy"
        meta={<Badge tone="accent">+12%</Badge>}
        footer={
          <>
            <Button size="sm">Registrar venta</Button>
            <Button size="sm" variant="ghost">
              Ver detalle
            </Button>
          </>
        }
      >
        <p style={{ margin: 0, fontSize: 30, fontWeight: 650 }}>$ 485.000</p>
      </Card>

      <Tabs
        label="Movimientos"
        items={[
          { id: 'ventas', label: 'Ventas', content: '12 ventas registradas hoy.' },
          { id: 'gastos', label: 'Gastos', content: '3 gastos por $ 64.000.' },
          { id: 'clientes', label: 'Clientes', content: '2 clientes nuevos.' },
        ]}
      />

      <TextField label="Buscar cliente" placeholder="Nombre o teléfono" />
      <Switch label="Avisarme al cerrar la caja" checked={notify} onCheckedChange={setNotify} />
      <Checkbox label="Incluir gastos fijos en el resumen" defaultChecked />
    </div>
  )
}

function Column({ style, title, description }: { style: 'minimal' | 'creativo'; title: string; description: string }) {
  return (
    <section
      data-style={style}
      aria-label={title}
      style={{
        background: 'var(--mr-color-bg)',
        color: 'var(--mr-color-text)',
        fontFamily: 'var(--mr-font-sans)',
        borderRadius: 24,
        padding: 24,
        border: '1px solid var(--mr-color-border)',
      }}
    >
      <p style={{ margin: '0 0 4px', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--mr-color-text-muted)' }}>
        {title}
      </p>
      <p style={{ margin: '0 0 20px', fontSize: 14, color: 'var(--mr-color-text-muted)' }}>{description}</p>
      <div style={{ maxWidth: 360 }}>
        <AppScreen />
      </div>
    </section>
  )
}

export const LadoALado: StoryObj = {
  name: 'Lado a lado',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
      <Column style="minimal" title="Minimal" description="Para bancos, salud, B2B y herramientas de trabajo." />
      <Column style="creativo" title="Creativo" description="Para marcas, comunidades, lifestyle y apps de consumo." />
    </div>
  ),
}

export const AppMovil: StoryObj = {
  name: 'App móvil (usa el interruptor de estilo)',
  parameters: { viewport: { defaultViewport: 'movil' } },
  globals: { viewport: { value: 'movil' } },
  render: () => (
    <div style={{ maxWidth: 380, margin: '0 auto' }}>
      <AppScreen />
    </div>
  ),
}
