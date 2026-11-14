import type { Preview } from '@storybook/react-vite'

/** Selectores Estilo y Tema de la barra superior. */
export const selectores: Preview['globalTypes'] = {
  style: {
    description: 'Estilo del sistema de diseño',
    toolbar: {
      title: 'Estilo',
      icon: 'paintbrush',
      items: [
        { value: 'minimal', title: 'Minimal · sobrio y profesional', icon: 'circlehollow' },
        { value: 'creativo', title: 'Creativo · con personalidad', icon: 'heart' },
      ],
      dynamicTitle: true,
    },
  },
  theme: {
    description: 'Modo de color',
    toolbar: {
      title: 'Tema',
      icon: 'sun',
      items: [
        { value: 'light', title: 'Claro', icon: 'sun' },
        { value: 'dark', title: 'Oscuro', icon: 'moon' },
      ],
      dynamicTitle: true,
    },
  },
}

export const valoresIniciales = { style: 'minimal', theme: 'light' }
