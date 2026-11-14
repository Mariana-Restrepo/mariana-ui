import { addons } from 'storybook/manager-api'
import {
  guardarPreferencia,
  nombrePiel,
  preferenciaInicial,
  type Preferencia,
} from './interfaz/preferencia'
import { temaInterfaz } from './interfaz/temaInterfaz'
import { traducirInterfaz } from './interfaz/textos'

/**
 * Interfaz de Storybook: la piel sigue a los selectores Estilo y Tema.
 * Storybook solo aplica el tema de su interfaz al cargar, así que al cambiarlos se recarga.
 */
const actual = preferenciaInicial()
guardarPreferencia(actual)
document.documentElement.dataset.mrInterfaz = nombrePiel(actual)
traducirInterfaz()

addons.setConfig({
  theme: temaInterfaz(actual.style, actual.theme),
  sidebar: { showRoots: true },
  enableShortcuts: true,
})

const esDistinta = (globals: Partial<Preferencia>) =>
  globals.style !== actual.style || globals.theme !== actual.theme

addons.register('mariana-ui/interfaz', (api) => {
  const canal = api.getChannel()
  if (!canal) return

  // Al cargar: si la vista previa arrancó con otro estilo/tema, se alinea con la preferencia.
  canal.on('setGlobals', ({ globals }: { globals: Partial<Preferencia> }) => {
    if (esDistinta(globals)) api.updateGlobals({ style: actual.style, theme: actual.theme })
  })

  // Cuando la persona cambia el estilo o el tema: guardar y recargar con la nueva piel.
  canal.on('globalsUpdated', ({ globals }: { globals: Partial<Preferencia> }) => {
    if (!esDistinta(globals)) return
    guardarPreferencia({ style: globals.style ?? actual.style, theme: globals.theme ?? actual.theme })
    window.location.reload()
  })
})
