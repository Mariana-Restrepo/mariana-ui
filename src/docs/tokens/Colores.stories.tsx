import type { Meta, StoryObj } from '@storybook/react-vite'
import { NombreToken } from './NombreToken'

const meta = { title: 'Fundamentos/Tokens/Colores', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta

const colores = [
  ['--mr-color-bg', 'Fondo de la página'],
  ['--mr-color-surface', 'Superficies (tarjetas, campos)'],
  ['--mr-color-surface-muted', 'Superficie secundaria'],
  ['--mr-color-border', 'Bordes suaves'],
  ['--mr-color-border-strong', 'Bordes de controles'],
  ['--mr-color-text', 'Texto principal'],
  ['--mr-color-text-muted', 'Texto secundario'],
  ['--mr-color-primary', 'Acción principal'],
  ['--mr-color-primary-subtle', 'Fondo de acento'],
  ['--mr-color-accent', 'Acento de marca'],
  ['--mr-color-success', 'Éxito'],
  ['--mr-color-warning', 'Advertencia'],
  ['--mr-color-danger', 'Error / destructivo'],
]

export const Colores: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
      {colores.map(([token, uso]) => (
        <div
          key={token}
          style={{
            border: '1px solid var(--mr-color-border)',
            borderRadius: 12,
            overflow: 'hidden',
            background: 'var(--mr-color-surface)',
          }}
        >
          <div style={{ height: 72, background: `var(${token})`, borderBottom: '1px solid var(--mr-color-border)' }} />
          <div style={{ padding: 12 }}>
            <NombreToken nombre={token} />
            <p style={{ fontSize: 13, color: 'var(--mr-color-text-muted)', margin: 0 }}>{uso}</p>
          </div>
        </div>
      ))}
    </div>
  ),
}
