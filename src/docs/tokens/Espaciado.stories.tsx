import type { Meta, StoryObj } from '@storybook/react-vite'
import { NombreToken } from './NombreToken'

const meta = { title: 'Fundamentos/Tokens/Espaciado', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta

const pasos = ['1', '2', '3', '4', '5', '6', '8']

export const Espaciado: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {pasos.map((paso) => (
        <div key={paso} style={{ display: 'grid', gridTemplateColumns: '120px auto', alignItems: 'center', gap: 16 }}>
          <NombreToken nombre={`--mr-space-${paso}`} />
          <span
            style={{ width: `var(--mr-space-${paso})`, height: 16, background: 'var(--mr-color-primary)', borderRadius: 4 }}
          />
        </div>
      ))}
    </div>
  ),
}
