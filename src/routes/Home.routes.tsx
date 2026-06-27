import ProtectedRoute from "../components/auth/ProtectedRoute";
import Home from "../pages/home/home";

const HomeRoutes = [
    {
        path:'/', 
        element:
        <Home />
    },
    {
        path:'/home', 
        element:
        <Home /> 
    },

]
export default HomeRoutes