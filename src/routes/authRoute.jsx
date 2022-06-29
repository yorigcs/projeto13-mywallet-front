import { Routes, Route } from 'react-router-dom'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
const AuthRoutes = () => (
    <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
    </Routes>
)
export default AuthRoutes;