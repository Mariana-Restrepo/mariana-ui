/**
 * Textos de la interfaz que Storybook no permite configurar:
 * pestaña del navegador ("Button ⋅ mariana-ui") y buscador en español.
 */
const TEXTO_BUSCADOR = 'Buscar en mariana-ui'

function ajustarTextos() {
  if (document.title.includes('Storybook')) {
    document.title = document.title.replace(/Storybook/g, 'mariana-ui')
  }
  const buscador = document.getElementById('storybook-explorer-searchfield') as HTMLInputElement | null
  if (buscador && buscador.placeholder !== TEXTO_BUSCADOR) {
    buscador.placeholder = TEXTO_BUSCADOR
    buscador.setAttribute('aria-label', TEXTO_BUSCADOR)
  }
}

export function traducirInterfaz() {
  new MutationObserver(ajustarTextos).observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
  })
  ajustarTextos()
}
