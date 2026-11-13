import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = { title: 'Fundamentos/Tokens', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta

const colors = [
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
const spaces = ['1', '2', '3', '4', '5', '6', '8']
const radii = ['sm', 'md', 'lg', 'full']

const label = { fontSize: 13, color: 'var(--mr-color-text-muted)', margin: 0 } as const
const code = { fontFamily: 'ui-monospace, monospace', fontSize: 13 } as const

export const Colores: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
      {colors.map(([token, use]) => (
        <div key={token} style={{ border: '1px solid var(--mr-color-border)', borderRadius: 12, overflow: 'hidden', background: 'var(--mr-color-surface)' }}>
          <div style={{ height: 72, background: `var(${token})`, borderBottom: '1px solid var(--mr-color-border)' }} />
          <div style={{ padding: 12 }}>
            <p style={{ ...code, margin: 0 }}>{token}</p>
            <p style={label}>{use}</p>
          </div>
        </div>
      ))}
    </div>
  ),
}

export const Espaciado: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {spaces.map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ ...code, width: 120 }}>--mr-space-{s}</span>
          <span style={{ width: `var(--mr-space-${s})`, height: 16, background: 'var(--mr-color-primary)', borderRadius: 4 }} />
        </div>
      ))}
    </div>
  ),
}

export const Bordes: StoryObj = {
  name: 'Radios',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {radii.map((r) => (
        <div key={r} style={{ textAlign: 'center' }}>
          <div style={{ width: 88, height: 88, background: 'var(--mr-color-primary-subtle)', border: '2px solid var(--mr-color-primary)', borderRadius: `var(--mr-radius-${r})` }} />
          <p style={{ ...code, marginTop: 8 }}>--mr-radius-{r}</p>
        </div>
      ))}
    </div>
  ),
}
