import React from 'react';
import useAuth from '../hooks/UseAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Review = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = user?.displayName;
        const occupation = form.occupation.value;
        const description = form.description.value;
        const payload = {
            name,
            occupation,
            description,
        }
        axiosPublic.post('/reviews', payload)
        Swal.fire('review posted successfully!')
        form.reset()

    }


    return (
        <div className='max-w-lg mx-auto p-6 bg-gray-50 rounded-xl shadow-sm'>
            <h2 className="text-center my-3 text-pink-600 font-bold text-2xl md:text-4xl">Review</h2>
            <form onSubmit={handleSubmit}>
            <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Your Name</legend>
          <input
          defaultValue={user?.displayName || 'anonymous'}
            type="text"
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Type here"
          />
        </fieldset>
            <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Occupation</legend>
          <input
            type="text"
            name='occupation'
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Description</legend>
          <textarea
          name='description'
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

export default Review;