import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from '../App'

describe('App', () => {
  it('loads the main page', () => {
    render(<App />)

    expect(screen.getByText(/React Starter \(Vite\)/))
    // expect(screen.getByText(/© Company 2022/))
  })
})
