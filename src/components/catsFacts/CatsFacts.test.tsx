import React from 'react'
import { render, screen } from '@testing-library/react'
import { CatsFacts } from './CatsFacts'

test('renders learn react link', () => {
  render(<CatsFacts />)
  const linkElement = screen.getByText('Loading...')
  expect(linkElement).toBeInTheDocument()
})
