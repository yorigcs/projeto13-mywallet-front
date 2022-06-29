import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './assets/GlobalStyles'
import Routes from './routes'
import { AuthProvider } from './Contexts/auth'

function App() {


  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App
