import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import AuthLayout from "../mainLayout/AuthLayout";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Error from "../components/Error";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path:'/team',
                element: <Team></Team>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
        ]
    },
    {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/signup',
                element:<Signup></Signup>
            },
            {
                path:'/auth/signin',
                element:<Signin></Signin>
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])
export default router