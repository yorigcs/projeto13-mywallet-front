import { Routes, Route } from 'react-router-dom'
import Home from '../screens/Home'
import NewInput from '../screens/NewInput'
import NewOutput from '../screens/NewOutput'
const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewInput" element={<NewInput />} />
        <Route path="/NewOutput" element={<NewOutput />} />
    </Routes>
)
export default AppRoutes;