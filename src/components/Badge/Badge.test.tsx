import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'
import { Card } from '../Card/Card'

describe('Badge', () => {
  it('siempre muestra texto (el color no es la única señal)', () => {
    render(<Badge tone="success" dot>Pagado</Badge>)
    expect(screen.getByText('Pagado')).toHaveClass('mr-badge--success')
  })
})

describe('Card', () => {
  it('usa el nivel de encabezado indicado', () => {
    render(<Card title="Ventas del mes" headingLevel={2} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Ventas del mes' })).toBeInTheDocument()
  })

  it('renderiza descripción y pie', () => {
    render(<Card title="Plan" description="Detalle" footer={<button>Ver</button>} />)
    expect(screen.getByText('Detalle')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Ver' })).toBeInTheDocument()
  })
})
