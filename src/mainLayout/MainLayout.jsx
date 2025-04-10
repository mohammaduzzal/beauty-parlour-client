import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/dashboard')
    return (
        <div>
            {noHeaderFooter || <Navbar/>}
            <div className="min-h-[calc(100vh-285px)]">
            <Outlet/>
            </div>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default MainLayout;