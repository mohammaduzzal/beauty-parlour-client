import React from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ManageService = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { data: services = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/services')
            return data;
        }
    });

    const handleDelete = async(id,title) =>{
      Swal.fire({
        title: "Are you sure?",
        text: `Delete "${title}"? This action cannot be undone.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          try{
            await axiosSecure.delete(`/service/${id}`)
            Swal.fire({
              title: "Deleted!",
              text: "Service has been deleted.",
              icon: "success",
              confirmButtonColor: "#d33",
            });
            refetch();

          }catch(error){
            console.error("Error deleting service:", error.response?.data || error.message);
        Swal.fire({
          title: "Error!",
          text: error.response?.data?.message || "Failed to delete service.",
          icon: "error",
          confirmButtonColor: "#d33",
        });
          }
        }
      });

    }

    
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
     {
        services.map((service,idx) =>(
            <tr key={service._id}>
            <th>{idx+1}</th>
            <td>{service.title}</td>
            <td>{service.price}</td>
            <td>
                <Link to={`/dashboard/updateService/${service._id}`} className='btn'>Update</Link>
            </td>
            <td>
                <button className='btn bg-red-600 text-white'
                onClick={()=> handleDelete(service._id,service.title)}
                >
                  
                    Delete
                </button>
            </td>
          </tr>
        ))
     }
  
          </tbody>
        </table>
      </div>
    );
};

export default ManageService;