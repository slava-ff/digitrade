import { render, screen } from '@testing-library/react'
import Router from './Router'

test('renders smth', () => {
  render(<Router />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
