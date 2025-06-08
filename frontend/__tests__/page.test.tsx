import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '../app/page'

// Mock fetch globally
global.fetch as jest.Mock) = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Mock message' }),
  })
)) as jest.Mock;

describe('Home Page', () => {
  test('renders static title', async () => {
    render(<Home />)
    await waitFor(() => {
      expect(screen.getByText('Frontend - Next.js')).toBeInTheDocument()
    })
  })

  test('renders message label', async () => {
    render(<Home />)
    await waitFor(() => {
      expect(screen.getByText('Message from backend:')).toBeInTheDocument()
    })
  })
})

