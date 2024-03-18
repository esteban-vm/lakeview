import { render, cleanup, within, screen } from '@/tests'
import Header from './Header'

describe('Header:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Header />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', async () => {
    const headerElem = screen.getByRole('banner')
    expect(headerElem).toBeInTheDocument()
    expect(headerElem).toHaveAccessibleName(/a great lifestyle/i)
    expect(within(headerElem).getByRole('img', { name: /slide 1/i })).toBeInTheDocument()
    expect(within(headerElem).getByRole('img', { name: /slide 2/i })).toBeInTheDocument()
    expect(within(headerElem).getByRole('img', { name: /slide 3/i })).toBeInTheDocument()
    expect(within(headerElem).getByRole('img', { name: /slide 4/i })).toBeInTheDocument()
    expect(within(headerElem).getByRole('img', { name: /lakeview logo/i })).toBeInTheDocument()
    expect(within(headerElem).getByRole('heading', { name: /a great lifestyle/i, level: 1 })).toBeInTheDocument()
    expect(within(headerElem).getByRole('heading', { name: /in a spectacular setting/i, level: 2 })).toBeInTheDocument()
  })
})
