import { useForm } from 'react-hook-form';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddService = () => {
  const { register, handleSubmit,reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async(data) =>{
    try{
      const payload = {
        ...data,
        price : Number(data.price)
      }
      console.log(payload);
      await axiosSecure.post('/services', payload)
      Swal.fire("Service added successfully!")
      reset();

    }catch(error){
      console.error("Error adding service:", error.response?.data || error.message);
      Swal.fire("Failed to add service.");
    }
  }





    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-xl shadow-sm">
           <h2 className="text-center my-3 text-pink-600 font-bold text-2xl md:text-4xl">Add a Service</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Service Title</legend>
          <input
            type="text"
            {...register('title',{required:'service title is required'})}
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Service Price</legend>
          <input
            type="number"
            {...register('price',{required:'price is required'})}
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Image</legend>
          <input
            type="text"
            {...register('image',{required:'image link is required'})}
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Enter Image Link"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Description</legend>
          <textarea
          {...register('description',{required:'description is required'})}
            className="textarea w-full p-3 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Enter Description"
          ></textarea>
        </fieldset>
        <button
        type='submit'
          className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
        >
          Submit
        </button>
        </form>
      </div>
    );
};

export default AddService;