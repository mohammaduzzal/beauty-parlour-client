import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/UseAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigation } from "react-router-dom";
const SocialLogin = () => {
    const { signinWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigation = useNavigation();


    const handleGoogle = async () => {
        try {
            // Step 1: Sign in with Google via Firebase
            const result = await signinWithGoogle();
            const user = result.user;
            console.log("Google sign-in successful:", user);
            // 2.prepare data for sending to mongodb
            const userData = {
                email: user.email,
                name: user.displayName || "Google User", // Fallback if no displayName
                firebaseUid: user.uid,
              };
              await axiosPublic.post('/users', userData)
              navigation('/')



            toast.success(`Welcome, ${user.displayName || "User"}! Signed in with Google`)

        } catch (error) {
            console.error("Google sign-in error:", error.message || error);
            toast.error("Google sign-in failed: " + (error.message || "Something went wrong"));
        }
    }

    return (
        <div>
            <button
                type="button"
                onClick={handleGoogle}
                className="w-full bg-white text-gray-700 p-3 rounded-md border border-gray-300 hover:bg-gray-50 transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
                <FaGoogle />
                Sign up with Google
            </button>
        </div>
    );
};

export default SocialLogin;