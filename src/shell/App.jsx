import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import './app.css'

const App = () => (
  <div className="app">
    <AppHeader />
    <main>
      <header>
        <h1>Screen One</h1>
      </header>
      <div className="content">
        <p>There is nothing to see here yet.</p>

        <div className="color-palette">
          <div className="blue-0">Blue 0</div>
          <div className="blue-1">Blue 1</div>
          <div className="blue-2">Blue 2</div>
          <div className="blue-3">Blue 3</div>
          <div className="blue-4">Blue 4</div>
          <div className="blue-5">Blue 5</div>
          <div className="blue-6">Blue 6</div>
          <div className="blue-7">Blue 7</div>
          <div className="blue-8">Blue 8</div>
          <div className="blue-9">Blue 9</div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
)

export default App
