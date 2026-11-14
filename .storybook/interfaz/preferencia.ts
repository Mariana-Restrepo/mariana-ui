import type { Estilo, Tema } from './marca'

/** Estilo y tema elegidos en la barra superior; se recuerdan entre visitas. */
export type Preferencia = { style: Estilo; theme: Tema }

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

/** Preferencia guardada (la usa la vista previa, que comparte el mismo origen). */
export function preferenciaGuardada(): Preferencia {
  return { ...PREDETERMINADA, ...desdeAlmacen() }
}

/** Preferencia al abrir Storybook: la URL manda sobre lo guardado. */
export function preferenciaInicial(): Preferencia {
  return { ...PREDETERMINADA, ...desdeAlmacen(), ...desdeUrl() }
}

export function guardarPreferencia(preferencia: Preferencia) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(preferencia))
  } catch {
    /* sin almacenamiento: la URL conserva la elección */
  }
}

/** Nombre de la piel para los ajustes finos de CSS (public/interfaz.css). */
export function nombrePiel({ style, theme }: Preferencia) {
  return `${style === 'creativo' ? 'neon' : 'editorial'}-${theme}`
}
