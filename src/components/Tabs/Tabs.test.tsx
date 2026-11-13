import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs } from './Tabs'

const items = [
  { id: 'ventas', label: 'Ventas', content: 'Panel de ventas' },
  { id: 'gastos', label: 'Gastos', content: 'Panel de gastos' },
  { id: 'caja', label: 'Caja', content: 'Panel de caja', disabled: true },
  { id: 'clientes', label: 'Clientes', content: 'Panel de clientes' },
]

describe('Tabs', () => {
  it('muestra solo el panel activo y lo relaciona con su pestaña', () => {
    render(<Tabs label="Secciones" items={items} />)
    expect(screen.getByRole('tablist', { name: 'Secciones' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Ventas' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'Ventas' })).toHaveTextContent('Panel de ventas')
    expect(screen.queryByText('Panel de gastos')).not.toBeVisible()
  })

  it('solo la pestaña activa entra en el orden de tabulación', () => {
    render(<Tabs label="Secciones" items={items} />)
    expect(screen.getByRole('tab', { name: 'Ventas' })).toHaveAttribute('tabindex', '0')
    expect(screen.getByRole('tab', { name: 'Gastos' })).toHaveAttribute('tabindex', '-1')
  })

  it('las flechas mueven el foco y saltan las pestañas deshabilitadas', async () => {
    const user = userEvent.setup()
    render(<Tabs label="Secciones" items={items} />)
    await user.tab()
    expect(screen.getByRole('tab', { name: 'Ventas' })).toHaveFocus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Gastos' })).toHaveFocus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Clientes' })).toHaveFocus()
    expect(screen.getByText('Panel de clientes')).toBeVisible()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Ventas' })).toHaveFocus()
  })

  it('Inicio y Fin saltan a los extremos', async () => {
    const user = userEvent.setup()
    render(<Tabs label="Secciones" items={items} />)
    await user.tab()
    await user.keyboard('{End}')
    expect(screen.getByRole('tab', { name: 'Clientes' })).toHaveFocus()
    await user.keyboard('{Home}')
    expect(screen.getByRole('tab', { name: 'Ventas' })).toHaveFocus()
  })
})
