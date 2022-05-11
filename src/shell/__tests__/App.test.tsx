import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from '../App'

describe('App', () => {
  test('loads the main page', () => {
    render(<App />)

    expect(screen.getByText(/React Starter \(Vite\)/))
    expect(screen.getByText(/© Company 2022/))
  })
})
