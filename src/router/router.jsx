import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Team from "../pages/Team";
import AuthLayout from "../mainLayout/AuthLayout";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Error from "../components/Error";
import Dashboard from "../pages/Dashboard";
import OrderList from "../dashboardComponent/OrderList";
import Users from "../dashboardComponent/Users";
import ManageService from "../dashboardComponent/ManageService";
import Book from "../dashboardComponent/Book";
import BookingList from "../dashboardComponent/BookingList";
import Review from "../dashboardComponent/Review";
import AddService from "../dashboardComponent/AddService";
import AdminRoute from "./AdminRoute";
import AllServices from "../pages/AllServices";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../components/UpdateService";

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
                path:'/allServices',
                element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>,
                children:[
                    // admin
                    {
                        path:'/dashboard/orderList',
                        element:<AdminRoute><OrderList/></AdminRoute>
                    },
                    {
                        path:'/dashboard/addService',
                        element:<AdminRoute><AddService/></AdminRoute>
                    },
                    {
                        path:'/dashboard/users',
                        element:<AdminRoute><Users/></AdminRoute>
                    },
                    {
                        path:'/dashboard/manageService',
                        element:<AdminRoute><ManageService/></AdminRoute>
                    },
                    {
                        path:'/dashboard/updateService/:id',
                        element:<AdminRoute><UpdateService/></AdminRoute>
                    },
                    // normal user
                    {
                        path:'/dashboard/book',
                        element:<Book/>
                    },
                    {
                        path:'/dashboard/bookingList',
                        element:<BookingList/>
                    },
                    {
                        path:'/dashboard/review',
                        element:<Review/>
                    },
                ]
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