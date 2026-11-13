import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextField } from './TextField'

describe('TextField', () => {
  it('asocia la etiqueta con el campo', () => {
    render(<TextField label="Correo" />)
    expect(screen.getByLabelText('Correo')).toBeInstanceOf(HTMLInputElement)
  })

  it('anuncia el texto de ayuda con aria-describedby', () => {
    render(<TextField label="Correo" hint="Usa tu correo personal" />)
    expect(screen.getByLabelText('Correo')).toHaveAccessibleDescription('Usa tu correo personal')
  })

  it('marca el error como inválido y lo anuncia', () => {
    render(<TextField label="Correo" hint="Ayuda" error="El correo no es válido" />)
    const input = screen.getByLabelText('Correo')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('Ayuda El correo no es válido')
    expect(screen.getByRole('alert')).toHaveTextContent('El correo no es válido')
  })

  it('permite escribir', async () => {
    const user = userEvent.setup()
    render(<TextField label="Nombre" />)
    await user.type(screen.getByLabelText('Nombre'), 'Mariana')
    expect(screen.getByLabelText('Nombre')).toHaveValue('Mariana')
  })

  it('el asterisco de requerido no se lee dos veces', () => {
    render(<TextField label="Nombre" required />)
    expect(screen.getByRole('textbox', { name: 'Nombre' })).toBeRequired()
  })
})
