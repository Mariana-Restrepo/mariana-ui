import { create } from 'storybook/theming/create'

/**
 * Cuatro "pieles" para la interfaz de Storybook, una por combinación de estilo × tema:
 *   Minimal  → Editorial (crema, tinta y bronce · espresso, crema y dorado)
 *   Creativo → Neón      (lavanda y neones intensos · ciruela y neones pastel)
 */

const brandUrl = 'https://mariana-restrepo.github.io/Mi-Portafolio/'
const fontBase = '"Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif'
const fontCode = 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace'

const editorialTitle = (accent: string) =>
  `<span style="display:inline-flex;align-items:baseline;gap:6px">` +
  `<span style="font-family:Fraunces,Georgia,serif;font-style:italic;font-size:22px;font-weight:400">Mariana</span>` +
  `<span style="font-family:${fontBase};font-size:11px;font-weight:650;letter-spacing:.14em;color:${accent}">UI</span>` +
  `</span>`

const neonTitle = (pink: string, yellow: string, mint: string) =>
  `<span style="display:inline-flex;align-items:center;gap:5px">` +
  [pink, yellow, mint]
    .map((c) => `<span style="width:9px;height:9px;border-radius:50%;background:${c};display:inline-block"></span>`)
    .join('') +
  `<span style="font-family:'Bricolage Grotesque',${fontBase};font-weight:800;font-size:18px;letter-spacing:-.03em;margin-left:4px">mariana·ui</span>` +
  `</span>`

export const editorialClaro = create({
  base: 'light',
  brandTitle: editorialTitle('#8a6430'),
  brandUrl,
  brandTarget: '_blank',
  fontBase,
  fontCode,
  colorPrimary: '#8a6430',
  colorSecondary: '#8a6430',
  appBg: '#f6f2ec',
  appContentBg: '#fffdf9',
  appPreviewBg: '#fffdf9',
  appBorderColor: '#ded5c7',
  appBorderRadius: 3,
  textColor: '#1d1b18',
  textInverseColor: '#f6f2ec',
  textMutedColor: '#645d53',
  barTextColor: '#645d53',
  barHoverColor: '#1d1b18',
  barSelectedColor: '#8a6430',
  barBg: '#fffdf9',
  buttonBg: '#fffdf9',
  buttonBorder: '#ded5c7',
  booleanBg: '#eee8de',
  booleanSelectedBg: '#fffdf9',
  inputBg: '#fffdf9',
  inputBorder: '#ded5c7',
  inputTextColor: '#1d1b18',
  inputBorderRadius: 3,
})

export const editorialOscuro = create({
  base: 'dark',
  brandTitle: editorialTitle('#d2ae73'),
  brandUrl,
  brandTarget: '_blank',
  fontBase,
  fontCode,
  colorPrimary: '#d2ae73',
  colorSecondary: '#d2ae73',
  appBg: '#141210',
  appContentBg: '#1a1917',
  appPreviewBg: '#1a1917',
  appBorderColor: '#312e29',
  appBorderRadius: 3,
  textColor: '#eee8df',
  textInverseColor: '#141210',
  textMutedColor: '#a39b8f',
  barTextColor: '#a39b8f',
  barHoverColor: '#eee8df',
  barSelectedColor: '#d2ae73',
  barBg: '#1a1917',
  buttonBg: '#23211e',
  buttonBorder: '#312e29',
  booleanBg: '#23211e',
  booleanSelectedBg: '#3a352e',
  inputBg: '#1a1917',
  inputBorder: '#312e29',
  inputTextColor: '#eee8df',
  inputBorderRadius: 3,
})

export const neonClaro = create({
  base: 'light',
  brandTitle: neonTitle('#e0245e', '#ffb627', '#12b886'),
  brandUrl,
  brandTarget: '_blank',
  fontBase,
  fontCode,
  colorPrimary: '#c8174f',
  colorSecondary: '#c8174f',
  appBg: '#ffffff',
  appContentBg: '#fbf8ff',
  appPreviewBg: '#fbf8ff',
  appBorderColor: '#e9e2fb',
  appBorderRadius: 14,
  textColor: '#1b1033',
  textInverseColor: '#ffffff',
  textMutedColor: '#5b5173',
  barTextColor: '#5b5173',
  barHoverColor: '#c8174f',
  barSelectedColor: '#c8174f',
  barBg: '#ffffff',
  buttonBg: '#fbf8ff',
  buttonBorder: '#e9e2fb',
  booleanBg: '#f1ebff',
  booleanSelectedBg: '#c8174f',
  inputBg: '#fbf8ff',
  inputBorder: '#e0245e',
  inputTextColor: '#1b1033',
  inputBorderRadius: 999,
})

export const neonOscuro = create({
  base: 'dark',
  brandTitle: neonTitle('#ff6b93', '#ffc94d', '#3ddbb0'),
  brandUrl,
  brandTarget: '_blank',
  fontBase,
  fontCode,
  colorPrimary: '#ff6b93',
  colorSecondary: '#ff6b93',
  appBg: '#1c1532',
  appContentBg: '#120d22',
  appPreviewBg: '#120d22',
  appBorderColor: '#342a55',
  appBorderRadius: 14,
  textColor: '#f5f0ff',
  textInverseColor: '#2a0715',
  textMutedColor: '#b4a9cf',
  barTextColor: '#b4a9cf',
  barHoverColor: '#ff6b93',
  barSelectedColor: '#ff6b93',
  barBg: '#1c1532',
  buttonBg: '#261d42',
  buttonBorder: '#342a55',
  booleanBg: '#261d42',
  booleanSelectedBg: '#ff6b93',
  inputBg: '#261d42',
  inputBorder: '#ff6b93',
  inputTextColor: '#f5f0ff',
  inputBorderRadius: 999,
})

export type Estilo = 'minimal' | 'creativo'
export type Tema = 'light' | 'dark'

export function temaInterfaz(estilo: Estilo, tema: Tema) {
  if (estilo === 'creativo') return tema === 'dark' ? neonOscuro : neonClaro
  return tema === 'dark' ? editorialOscuro : editorialClaro
}
