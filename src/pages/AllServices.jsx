import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AllServices = () => {
    const axiosPublic = useAxiosPublic()
    const { data: services = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/services')
            return data;
        }
    })


    // console.log(services);
    return (
        <div className="my-10">
            <h2 className="text-center text-2xl md:text-4xl text-pink-600 font-bold ">All Services</h2>
            <div className="flex justify-between my-3 w-11/12 mx-auto">
                <div className="flex items-center">
                <input type="text" placeholder="type here" className="input input-neutral" />
                    <button className="btn btn-primary bg-pink-600">Search</button>
                </div>
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort By</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Title</a></li>
                            <li><a>Price</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map((service) => (
                        <div key={service._id} className="card bg-base-100 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src={service.image}
                                    alt="Shoes"
                                    className="rounded-xl h-20 w-20 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.title}</h2>
                                <p className="text-pink-600">Price : {service.price}</p>
                                <p>{service.description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary bg-pink-600">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllServices;