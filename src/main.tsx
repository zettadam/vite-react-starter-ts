import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './shell/App'

import './main.css'

const container: HTMLElement | null = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  console.error('Cannot find HTML element with id `root`')
}
