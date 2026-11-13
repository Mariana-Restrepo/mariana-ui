import type { Preview } from '@storybook/react-vite'
import '../src/tokens/tokens.css'

const preview: Preview = {
  globalTypes: {
    style: {
      description: 'Estilo del sistema de diseño',
      toolbar: {
        title: 'Estilo',
        icon: 'paintbrush',
        items: [
          { value: 'minimal', title: 'Minimal · sobrio y profesional', icon: 'circlehollow' },
          { value: 'creativo', title: 'Creativo · con personalidad', icon: 'heart' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Modo de color',
      toolbar: {
        title: 'Tema',
        icon: 'sun',
        items: [
          { value: 'light', title: 'Claro', icon: 'sun' },
          { value: 'dark', title: 'Oscuro', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    style: 'minimal',
    theme: 'light',
  },
  decorators: [
    (Story, context) => (
      <div
        data-style={context.globals.style}
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
    viewport: {
      options: {
        movil: { name: 'Móvil · 375', styles: { width: '375px', height: '812px' }, type: 'mobile' },
        movilGrande: { name: 'Móvil grande · 430', styles: { width: '430px', height: '932px' }, type: 'mobile' },
        tablet: { name: 'Tablet · 768', styles: { width: '768px', height: '1024px' }, type: 'tablet' },
        escritorio: { name: 'Escritorio · 1280', styles: { width: '1280px', height: '800px' }, type: 'desktop' },
      },
    },
  },
}
export default preview
