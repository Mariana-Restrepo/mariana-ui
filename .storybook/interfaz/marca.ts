/** Datos de marca que comparten las cuatro pieles de la interfaz de Storybook. */

export type Estilo = 'minimal' | 'creativo'
export type Tema = 'light' | 'dark'

/** El logo de la documentación lleva al portafolio de Mariana. */
export const marca = {
  brandUrl: 'https://mariana-restrepo.github.io/Mi-Portafolio/',
  brandTarget: '_blank',
  fontBase: '"Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif',
  fontCode: 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace',
} as const
