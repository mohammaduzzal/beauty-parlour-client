// Dashboard.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/UseAuth";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const {  loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => navigate("/"))
      .catch((err) => console.error("Logout error:", err));
  };

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-64 min-h-screen bg-pink-200">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "text-pink-600" : "")} to="/dashboard/orderList">Order List</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "text-pink-600" : "")} to="/dashboard/addService">Add Service</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "text-pink-600" : "")} to="/dashboard/users">Make Admin</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "text-pink-600" : "")} to="/dashboard/manageService">Manage Service</NavLink>
              </li>
            </>
          ) : (
            <>
              {/* <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-pink-600" : "")}
                  to="/dashboard/book"
                >
                  Book
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-pink-600" : "")}
                  to="/dashboard/bookingList"
                >
                  Booking List
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review"   className={({ isActive }) => (isActive ? "text-pink-600" : "")}>Review</NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="px-2 py-2 rounded hover:bg-pink-600 text-start"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;