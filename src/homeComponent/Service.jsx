import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Service = () => {
    const axiosPublic = useAxiosPublic()
    const {data : limitedServices =[],isLoading} = useQuery({
        queryKey:['limitedServices'],
        queryFn: async()=>{
            const {data} = await axiosPublic.get('/services/limited')
            return data
        }
    })
    if(isLoading) return <p>Loading....</p>
    return (
        <div className="my-10 w-11/12 mx-auto">
            <h2 className="font-bold text-2xl md:text-3xl text-center">Our Awesome <span className="text-pink-400">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
           {
            limitedServices.map((limitedService) =>(
                <div key={limitedService._id} className="card bg-base-100 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src={limitedService.image}
                                    alt="Shoes"
                                    className="rounded-xl h-20 w-20 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{limitedService.title}</h2>
                                <p className="text-pink-600">Price : {limitedService.price}</p>
                                <p>{limitedService.description}</p>
                                <div className="card-actions">
                                    <Link className="btn btn-error bg-pink-400">Book Now</Link>
                                </div>
                            </div>
                        </div>
            ))
           }
            </div>
            <div className="block items-center text-center my-3">
            <Link to={'/allServices'} className="btn btn-error bg-pink-500 text-white">Explore More</Link>
            </div>
        </div>
    );
};

export default Service;