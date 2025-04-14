import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const OrderList = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [],refetch,isLoading } = useQuery({
    queryKey: ['myBookings'],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/booked')
      return data
    }
  })
  // console.log(bookings);
  const handleStatusUpdate = async(id, newStatus) =>{
    try{
      const res = await axiosSecure.patch(`/booked/${id}`,{status : newStatus})
      if(res.data.modifiedCount > 0){
        Swal.fire('Status Updated')
        refetch()
      }

    }catch(error){
      console.error("Failed to update status", error);
    toast.error("Failed to update status");
    }

  }
  if(isLoading) return <p>Loading....</p>
  

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            bookings.map((bookings, idx) => (
              <tr key={bookings._id}>
                <th>{idx + 1}</th>
                <td>{bookings.name}</td>
                <td>{bookings.email}</td>
                <td>{bookings.service_title}</td>
                <td>
                  <select
                  value={bookings.status || "pending"} // Reflect current status
                  onChange={(e)=>handleStatusUpdate(bookings._id, e.target.value)}
                  className="select select-bordered select-sm w-full max-w-xs">
                    <option>pending</option>
                    <option>done</option>
                    <option>ongoing</option>
                  </select>
                </td>

              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  );
};

export default OrderList;