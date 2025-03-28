import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 hover:scale-105">
                    <h2 className="text-2xl md:text-5xl font-bold text-pink-400 text-center my-5 animate-bounce">Login</h2>
                    <form className="space-y-6">
                        {/* email */}
                        <div className="relative">
                            <input
                             type="text"
                             name="email"
                             className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 peer"
                             placeholder="email"
                             required
                             />
                             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600 transform transition-all duration-300 peer-focus:-top-6 peer-focus:text-pink-400">Email</label>
                        </div>
                        {/* password */}
                        <div className="relative">
                            <input
                             type="text"
                             name="password"
                             className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 peer"
                             placeholder="password"
                             required
                             />
                             <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600 transform transition-all duration-300 peer-focus:-top-6 peer-focus:text-pink-400">Password</label>
                        </div>
                        <button
                                type="submit"
                                className="w-full bg-pink-400 text-white p-3 rounded-md hover:bg-pink-500 transform transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                Login
                            </button>
                            {/* Google Sign-in Button */}
                            <button
                                type="button"
                                className="w-full bg-white text-gray-700 p-3 rounded-md border border-gray-300 hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <FaGoogle/>
                                Sign up with Google
                            </button>
        
                            {/* Login Link */}
                            <div className="text-center">
                                <p className="text-gray-600 text-sm">
                                    Don't  have an account?{' '}
                                    <Link
                                        to='/auth/signup'
                                        className="text-pink-400 hover:text-pink-500 transition-colors duration-300 hover:underline"
                                    >
                                        Signup
                                    </Link>
                                </p>
                            </div>
                    </form>
                    </div>
                </div>
    );
};

export default Signin;