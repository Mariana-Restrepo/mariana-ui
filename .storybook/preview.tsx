import type { Preview } from '@storybook/react-vite'
import '../src/tokens/tokens.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Tema de color',
      toolbar: {
        title: 'Tema',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Claro', icon: 'sun' },
          { value: 'dark', title: 'Oscuro', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, context) => (
      <div
        data-theme={context.globals.theme}
        style={{
          background: 'var(--mr-color-bg)',
          color: 'var(--mr-color-text)',
          fontFamily: 'var(--mr-font-sans)',
          padding: '2rem',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i } },
    a11y: { test: 'error' },
  },
}
export default preview
