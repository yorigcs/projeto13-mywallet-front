import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './assets/GlobalStyles'
import LogIn from './routes/NoAuthRoutes/LogIn'
import SignIn from './routes/NoAuthRoutes/SignIn'

function App() {


  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
