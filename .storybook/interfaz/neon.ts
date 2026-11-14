import { create } from 'storybook/theming/create'
import { marca } from './marca'

/** Piel "Neón" (estilo Creativo): lavanda con neones intensos · ciruela con neones pastel. */

const logo = (rosa: string, amarillo: string, menta: string) =>
  `<span style="display:inline-flex;align-items:center;gap:5px">` +
  [rosa, amarillo, menta]
    .map((color) => `<span style="width:9px;height:9px;border-radius:50%;background:${color};display:inline-block"></span>`)
    .join('') +
  `<span style="font-family:'Bricolage Grotesque',${marca.fontBase};font-weight:800;font-size:18px;letter-spacing:-.03em;margin-left:4px">mariana·ui</span>` +
  `</span>`

export const neonClaro = create({
  ...marca,
  base: 'light',
  brandTitle: logo('#e0245e', '#ffb627', '#12b886'),
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
  ...marca,
  base: 'dark',
  brandTitle: logo('#ff6b93', '#ffc94d', '#3ddbb0'),
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
