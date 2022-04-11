import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const App = () => (
  <div className="app">
    <AppHeader />
    <main>
      <header>
        <h1>Screen One</h1>
      </header>
      <div className="content">
        <p>There is nothing to see here yet.</p>
      </div>
    </main>
    <AppFooter />
  </div>
)

export default App
