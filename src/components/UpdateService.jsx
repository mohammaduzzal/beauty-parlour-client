import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

const UpdateService = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  // console.log(id);
  const { register, handleSubmit ,reset,
    formState: { errors, isSubmitting }, } = useForm();

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
  const { data: service = {},isLoading } = useQuery({
    queryKey: ['service', id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/service/${id}`)
      return data;
    }
  })
  // console.log(service);
  // set default value once service data is loaded
  useEffect(()=>{
    if(service){
      reset({
        title: service.title || "",
        price: service.price || 0,
        image: service.image || "",
        description: service.description || "",
      })
    }
  },[service,reset])


  const onSubmit = async(data) => {
    try{
      const payload ={
        ...data,
        price: Number(data.price)
      };
      await axiosSecure.patch(`/service/${id}`, payload)
      Swal.fire("Service updated successfully!");
      navigate('/dashboard/manageService')
    }catch(error){
      // console.error("Error updating service:", error.response?.data || error.message);
      Swal.fire("Failed to update service.");
    }

  }

  if(isLoading) return <p>Loading.....</p>


  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-center my-3 text-pink-600 font-bold text-2xl md:text-4xl">Update a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Service Title</legend>
          <input
            type="text"
            {...register('title', { required: 'service title is required' })}
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Service Price</legend>
          <input
            type="number"
            {...register('price', { required: 'price is required' })}
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Image</legend>
          <input
            type="text"
            {...register('image', { required: 'image link is required' })}
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Enter Image Link"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Description</legend>
          <textarea
            {...register('description', { required: 'description is required' })}
            className="textarea w-full p-3 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Enter Description"
          ></textarea>
        </fieldset>
        <button
          type='submit'
          disabled={isSubmitting}
          className={`w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
         {isSubmitting ? "Updating..." : "Update Service"}
        </button>
      </form>
    </div>
  );
};

export default UpdateService;