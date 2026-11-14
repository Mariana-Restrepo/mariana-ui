import type { Meta, StoryObj } from '@storybook/react-vite'
import { NombreToken } from './NombreToken'

const meta = { title: 'Fundamentos/Tokens/Radios', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta

const radios = ['sm', 'md', 'lg', 'full']

export const Radios: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {radios.map((radio) => (
        <div key={radio} style={{ display: 'grid', justifyItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 88,
              height: 88,
              background: 'var(--mr-color-primary-subtle)',
              border: '2px solid var(--mr-color-primary)',
              borderRadius: `var(--mr-radius-${radio})`,
            }}
          />
          <NombreToken nombre={`--mr-radius-${radio}`} />
        </div>
      ))}
    </div>
  ),
}
