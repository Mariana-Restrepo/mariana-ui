import { editorialClaro, editorialOscuro } from './editorial'
import type { Estilo, Tema } from './marca'
import { neonClaro, neonOscuro } from './neon'

/** Elige la piel de la interfaz: Minimal → Editorial, Creativo → Neón; el tema decide claro u oscuro. */
export function temaInterfaz(estilo: Estilo, tema: Tema) {
  if (estilo === 'creativo') return tema === 'dark' ? neonOscuro : neonClaro
  return tema === 'dark' ? editorialOscuro : editorialClaro
}
