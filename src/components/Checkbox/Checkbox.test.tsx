import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('se marca al hacer clic en la etiqueta', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Acepto los términos" />)
    await user.click(screen.getByText('Acepto los términos'))
    expect(screen.getByRole('checkbox', { name: 'Acepto los términos' })).toBeChecked()
  })

  it('se marca con la barra espaciadora', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Recordarme" />)
    await user.tab()
    await user.keyboard(' ')
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('anuncia la descripción', () => {
    render(<Checkbox label="Novedades" description="Un correo al mes" />)
    expect(screen.getByRole('checkbox')).toHaveAccessibleDescription('Un correo al mes')
  })
})
