import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from './assets/GlobalStyles'
import LogIn from './routes/NoAuthRoutes/LogIn'
import SignUp from './routes/NoAuthRoutes/SignUp'

function App() {


  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
