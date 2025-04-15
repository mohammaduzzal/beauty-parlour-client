import { useForm } from "react-hook-form";
import useAuth from "../hooks/UseAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Message = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: {  isSubmitting } } = useForm({
        defaultValues: {
            email: user?.email || ''
        }
    });

    const onSubmit = async (data) => {
        try {
            const payload = {
                name: `${data.firstName} ${data.lastName}`,
                number: data.number,
                email: user?.email,
                message: data.message,
            }
            await axiosPublic.post('/message', payload)
            Swal.fire('message send successfully!')
            reset()

        } catch (error) {
            // console.error("Error sending message:", error.response?.data || error.message);
        }
    }

    return (
        <div className="my-10 w-8/12 mx-auto text-gray-700">
            <h2 className="text-2xl text-black md:text-3xl font-bold text-center my-6">Let us handle your <br />
                project, professionally.</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                        <input type="text" placeholder="First Name"
                        {...register("firstName",{required: "First name is required",})}
                         className="input input-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                        <input type="text" placeholder="Last Name"  
                        {...register("lastName",{required: "Last name is required",})}className="input input-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                        <input type="text" placeholder="Phone Number" 
                         {...register("number",{
                            pattern:{
                                value:/^[0-9+\-\s]*$/,
                                message: "Invalid phone number format",
                            }
                         })} 
                         className="input input-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary" />
                    </div>
                </div>
                <div>
                    <textarea
                        placeholder="Your message..."
                        {...register("message", {
                            required: "Message is required",
                            minLength: { value: 10, message: "Message must be at least 10 characters" },
                            maxLength: { value: 500, message: "Message cannot exceed 500 characters" },
                          })}
                        rows="4"
                        className="textarea textarea-bordered w-full bg-white border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting || !user}
                        className={`btn btn-error px-8 py-3 text-white font-semibold bg-pink-400 ${isSubmitting || !user ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isSubmitting ? "sending" : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Message;