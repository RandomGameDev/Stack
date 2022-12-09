import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Atom:Button', () => {
  it('renders a button with a Login text', () => {
    render(<Button>Login</Button>)

    const button = screen.getByText('Login')
    expect(button).toBeInTheDocument()
  })
})
