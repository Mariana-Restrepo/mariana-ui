import { create } from 'storybook/theming/create'
import { marca } from './marca'

/** Piel "Editorial" (estilo Minimal): crema, tinta y bronce · espresso, crema y dorado. */

const logo = (acento: string) =>
  `<span style="display:inline-flex;align-items:baseline;gap:6px">` +
  `<span style="font-family:Fraunces,Georgia,serif;font-style:italic;font-size:22px;font-weight:400">Mariana</span>` +
  `<span style="font-family:${marca.fontBase};font-size:11px;font-weight:650;letter-spacing:.14em;color:${acento}">UI</span>` +
  `</span>`

export const editorialClaro = create({
  ...marca,
  base: 'light',
  brandTitle: logo('#8a6430'),
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
  ...marca,
  base: 'dark',
  brandTitle: logo('#d2ae73'),
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
