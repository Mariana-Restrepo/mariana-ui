import type { Preview } from '@storybook/react-vite'
import '../src/tokens/index.css'
import { preferenciaGuardada } from './interfaz/preferencia'
import { temaInterfaz } from './interfaz/temaInterfaz'
import { conEstiloYTema } from './vista-previa/decorador'
import { selectores, valoresIniciales } from './vista-previa/selectores'
import { vistas } from './vista-previa/vistas'

// Las páginas de documentación usan la misma piel que la interfaz.
const piel = preferenciaGuardada()

const preview: Preview = {
  globalTypes: selectores,
  initialGlobals: valoresIniciales,
  decorators: [conEstiloYTema],
  parameters: {
    layout: 'fullscreen',
    docs: { theme: temaInterfaz(piel.style, piel.theme) },
    options: {
      storySort: { order: ['Introducción', 'Fundamentos', ['Tokens'], 'Componentes'] },
    },
    controls: { matchers: { color: /(background|color)$/i } },
    a11y: { test: 'error' },
    viewport: { options: vistas },
  },
}
export default preview
