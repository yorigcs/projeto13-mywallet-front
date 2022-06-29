import AuthRoutes from "./authRoute"
import AppRoutes from "./appRoute";
import { useAuth } from "../Contexts/auth";

const Routes = () => {
    const { signed } = useAuth();
    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;