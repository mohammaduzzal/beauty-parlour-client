import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading) return <p>Loading......</p>


    if(user) return children
    return <Navigate to='/auth/signin' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;