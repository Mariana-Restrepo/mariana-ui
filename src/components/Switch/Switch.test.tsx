import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './Switch'

describe('Switch', () => {
  it('usa role="switch" con su etiqueta', () => {
    render(<Switch label="Modo oscuro" />)
    expect(screen.getByRole('switch', { name: 'Modo oscuro' })).toHaveAttribute('aria-checked', 'false')
  })

  it('cambia de estado con clic y teclado (no controlado)', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Switch label="Notificaciones" onCheckedChange={onChange} />)
    const sw = screen.getByRole('switch')
    await user.click(sw)
    expect(sw).toHaveAttribute('aria-checked', 'true')
    await user.keyboard(' ')
    expect(sw).toHaveAttribute('aria-checked', 'false')
    expect(onChange).toHaveBeenNthCalledWith(1, true)
    expect(onChange).toHaveBeenNthCalledWith(2, false)
  })

  it('respeta el modo controlado', async () => {
    const user = userEvent.setup()
    function Controlled() {
      const [on, setOn] = useState(true)
      return <Switch label="Wifi" checked={on} onCheckedChange={setOn} />
    }
    render(<Controlled />)
    const sw = screen.getByRole('switch')
    expect(sw).toHaveAttribute('aria-checked', 'true')
    await user.click(sw)
    expect(sw).toHaveAttribute('aria-checked', 'false')
  })
})
