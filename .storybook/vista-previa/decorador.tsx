import type { Decorator } from '@storybook/react-vite'

/** Envuelve cada historia con el estilo y el tema elegidos en la barra superior. */
export const conEstiloYTema: Decorator = (Story, context) => (
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
)
