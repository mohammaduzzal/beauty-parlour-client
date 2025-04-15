import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import logo from '../../public/logo.png'

const Navbar = () => {
  const {user,logout} = useAuth();
  const handleLogout = () =>{
    logout()
    .then(()=>{})
    .catch(err =>{
      // console.log(err);
    })
  }


  const links = <>
  <li><NavLink to='/'  className={({ isActive }) => (isActive ? "text-pink-600" : "")}>Home</NavLink></li>
  <li><NavLink to='/portfolio'  className={({ isActive }) => (isActive ? "text-pink-600" : "")}>Our Portfolio</NavLink></li>
  <li><NavLink to='/team'  className={({ isActive }) => (isActive ? "text-pink-600" : "")}>Our Team</NavLink></li>
 {user &&  <li><NavLink to='/allServices'  className={({ isActive }) => (isActive ? "text-pink-600" : "")}>All Services</NavLink></li>}
  {user && <li><NavLink to='/dashboard'  className={({ isActive }) => (isActive ? "text-pink-600" : "")}>Dashboard</NavLink></li>}
  </>


    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
          links
        }
      </ul>
    </div>
    <div>
      <img className="w-[50px] h-[25px] md:w-[100px] md:h-[50px]" src={logo} alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user && user.email ? <>
      <button onClick={handleLogout} className="btn">Logout</button>
      </> : <>
      <Link to='/auth/signin' className="btn">Login</Link>
      </>
    }
  </div>
</div>
    );
};

export default Navbar;