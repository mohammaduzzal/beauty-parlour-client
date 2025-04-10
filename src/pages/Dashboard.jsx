import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/UseAuth";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const {logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = () =>{
        logout()
        .then(()=>{})
        .catch(err =>{
            console.log(err);
        })
        navigate('/')

    }


    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-64 min-h-screen bg-pink-200">
                <ul className="menu">
                    
                        <li><NavLink className={({isActive})=> isActive ? 'text-pink-600' : ''} to={'/dashboard/book'}>Book</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? 'text-pink-600' : ''} to={'/dashboard/bookingList'}>Booking List</NavLink></li>
                        <li><NavLink to={'/dashboard/review'}>Review</NavLink></li>
                        <li><NavLink to={'/dashboard/orderList'}>Order List</NavLink></li>
                        <li><NavLink to={'/dashboard/addService'}>Add Service</NavLink></li>
                        <li><NavLink to={'/dashboard/users'}>Make Admin</NavLink></li>
                        <li><NavLink to={'/dashboard/manageService'}>Manage Service</NavLink></li>

                        <div className="divider"></div>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <button onClick={handleLogout} className="px-2 py-2 rounded hover:bg-pink-600  text-start">Logout</button>
                    
                </ul>

            </div>

            <div className="flex-1 p-8">
                <Outlet/>
            </div>
            
        </div>
    );
};

export default Dashboard;