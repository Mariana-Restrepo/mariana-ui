/** Nombre de un token en tipografía de código; lo comparten todas las páginas de tokens. */
export function NombreToken({ nombre }: { nombre: string }) {
  return <code style={{ display: 'block', fontFamily: 'ui-monospace, monospace', fontSize: 13 }}>{nombre}</code>
}
