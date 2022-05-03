import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './shell/App'

import 'open-props/style'
import 'open-props/normalize'

import './main.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
