import { addons } from 'storybook/manager-api'
import { temaInterfaz, type Estilo, type Tema } from './themes'

/**
 * La "piel" de Storybook sigue a los selectores Estilo y Tema de la barra superior.
 * Storybook solo aplica el tema de su interfaz al cargar, así que cuando cambia
 * el estilo o el tema se guarda la preferencia y la página se recarga.
 */

type Preferencia = { style: Estilo; theme: Tema }
const CLAVE = 'mariana-ui:interfaz'
const PREDETERMINADA: Preferencia = { style: 'minimal', theme: 'light' }

/** Lee estilo y tema de la URL (?globals=style:creativo;theme:dark). */
function desdeUrl(): Partial<Preferencia> {
  const globals = new URLSearchParams(window.location.search).get('globals') ?? ''
  const pares = Object.fromEntries(globals.split(';').map((par) => par.split(':')))
  const style = pares.style === 'creativo' || pares.style === 'minimal' ? pares.style : undefined
  const theme = pares.theme === 'dark' || pares.theme === 'light' ? pares.theme : undefined
  return { ...(style && { style }), ...(theme && { theme }) }
}

function desdeAlmacen(): Partial<Preferencia> {
  try {
    return JSON.parse(localStorage.getItem(CLAVE) ?? '{}') as Partial<Preferencia>
  } catch {
    return {}
  }
}

function guardar(pref: Preferencia) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(pref))
  } catch {
    /* sin almacenamiento: la URL conserva la elección */
  }
}

const actual: Preferencia = { ...PREDETERMINADA, ...desdeAlmacen(), ...desdeUrl() }
// Se guarda siempre: la vista previa (mismo origen) la lee para pintar las páginas de documentación.
guardar(actual)

// Marca el documento para los ajustes finos de CSS (manager-head.html).
document.documentElement.dataset.mrInterfaz = `${actual.style === 'creativo' ? 'neon' : 'editorial'}-${actual.theme}`

addons.setConfig({
  theme: temaInterfaz(actual.style, actual.theme),
  sidebar: { showRoots: true },
  enableShortcuts: true,
})

addons.register('mariana-ui/interfaz', (api) => {
  const canal = api.getChannel()
  if (!canal) return

  // Al cargar: si la vista previa arrancó con otro estilo/tema, se alinea con la preferencia.
  canal.on('setGlobals', ({ globals }: { globals: Partial<Preferencia> }) => {
    if (globals.style !== actual.style || globals.theme !== actual.theme) {
      api.updateGlobals({ style: actual.style, theme: actual.theme })
    }
  })

  // Cuando la persona cambia el estilo o el tema: guardar y recargar con la nueva piel.
  canal.on('globalsUpdated', ({ globals }: { globals: Partial<Preferencia> }) => {
    const siguiente: Preferencia = {
      style: globals.style ?? actual.style,
      theme: globals.theme ?? actual.theme,
    }
    if (siguiente.style !== actual.style || siguiente.theme !== actual.theme) {
      guardar(siguiente)
      window.location.reload()
    }
  })
})
