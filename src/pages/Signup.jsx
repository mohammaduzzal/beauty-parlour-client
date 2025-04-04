import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";




const Signup = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const { createUser } = useAuth();
    const {
        register, //register input field
        handleSubmit, //handle form submission
        formState: { errors }, //tracks error
        reset
    } = useForm()

    //   func handle form submission
    const onSubmit = async (data) => {
        // console.log('form data:', data);
        const { name,email, password } = data //destructure
        try {
            //1.create user in firebase
            const result = await createUser(email, password)
            const user = result.user;
            console.log(user);
            // 2.sent data to db
            const userInfo = {
                name,
                email,
                password,
                role:"user"
            }
             await axiosPublic.post('/users', userInfo)
            reset()
            navigate('/')

            toast.success("Signup successful!")


        } catch (error) {
            // Step 4: Handle errors (Firebase or Axios)
            console.error("Error during signup:", error.message || error);
            toast.error("Signup failed: " + (error.message || "Something went wrong"));
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 hover:scale-105">
                <h2 className="text-2xl md:text-5xl font-bold text-pink-400 text-center my-5 animate-bounce">Signup</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* username */}
                    <div className="relative">
                        <input
                            type="text"
                            {...register("username", { required: "username is required" })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 peer"
                            placeholder="username"
                        />
                        <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600 transform transition-all duration-300 peer-focus:-top-6 peer-focus:text-pink-400">Username</label>
                        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                    </div>
                    {/* email */}
                    <div className="relative">
                        <input
                            type="text"
                            {...register("email", { required: "email is required" })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 peer"
                            placeholder="email"
                        />
                        <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600 transform transition-all duration-300 peer-focus:-top-6 peer-focus:text-pink-400">Email</label>
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    {/* password */}
                    <div className="relative">
                        <input
                            type="password"
                            {...register("password", { required: "password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 peer"
                            placeholder="password"
                        />
                        <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600 transform transition-all duration-300 peer-focus:-top-6 peer-focus:text-pink-400">Password</label>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-400 text-white p-3 rounded-md hover:bg-pink-500 transform transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Sign Up
                    </button>
                    {/* Google Sign-in Button */}
                    <SocialLogin />
                    {/* Login Link */}
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{' '}
                            <Link
                                to='/auth/signin'
                                className="text-pink-400 hover:text-pink-500 transition-colors duration-300 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;