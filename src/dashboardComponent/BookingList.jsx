import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/UseAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const BookingList = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data : myBookings = []} = useQuery({
        queryKey:['myBookings', user?.email],
        queryFn: async()=>{
            const {data} = await axiosPublic.get(`/booked?email=${user.email}`)
            return data
        }
    })

    return (
        <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5  shadow-2xl">
          {
            myBookings.map((booked) =>(
                <div key={booked._id} className="card bg-base-100  shadow-sm p-5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <figure className="md:px-10 md:pt-10">
                    <img
                        src={booked.service_image}
                        alt="pic"
                        className="rounded-xl" />
                   
                </figure>
                <p className={`btn text-pink-500 ${
                    booked.status === 'pending' ? 'bg-blue-200' 
                    : booked.status === 'done' ? 'bg-green-300'
                    : booked.status === 'ongoing' ? 'bg-yellow-200' : ''
                }`}>
                    {booked.status}
                    </p>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-pink-600">{booked.service_title}</h2>
                    
                </div>
            </div>
            ))
          }
        </div>
    );
};

export default BookingList;