// Principio VIII de la constitución: ningún archivo .ts, .tsx o .css supera 150 líneas.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const LIMITE = 150
const CARPETAS = ['src', '.storybook', 'scripts']
const EXTENSIONES = /\.(ts|tsx|css|mjs)$/

function archivos(carpeta) {
  return readdirSync(carpeta).flatMap((nombre) => {
    const ruta = join(carpeta, nombre)
    if (statSync(ruta).isDirectory()) return archivos(ruta)
    return EXTENSIONES.test(nombre) ? [ruta] : []
  })
}

const largos = CARPETAS.flatMap(archivos)
  .map((ruta) => ({ ruta, lineas: readFileSync(ruta, 'utf8').split('\n').length }))
  .filter(({ lineas }) => lineas > LIMITE)

if (largos.length > 0) {
  console.error(`Archivos de más de ${LIMITE} líneas (divídelos o justifícalos en el plan):`)
  for (const { ruta, lineas } of largos) console.error(`  ${ruta}: ${lineas}`)
  process.exit(1)
}
console.log(`Todos los archivos tienen ${LIMITE} líneas o menos.`)
