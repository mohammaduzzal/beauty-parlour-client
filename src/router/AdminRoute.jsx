import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/UseAuth";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    const location= useLocation()
    

    if (loading || isAdminLoading) {
        return <p>Loading...</p>;
      } 


    if(user && isAdmin === true){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default AdminRoute;