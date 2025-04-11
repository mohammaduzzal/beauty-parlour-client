import React from 'react';

const AddService = () => {
    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-xl shadow-sm">
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Service Title</legend>
          <input
            type="text"
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Image</legend>
          <input
            type="text"
            className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Enter Image Link"
          />
        </fieldset>
        <fieldset className="fieldset mb-6 border border-gray-200 rounded-lg p-4">
          <legend className="fieldset-legend text-sm font-medium text-gray-700 px-2">Description</legend>
          <textarea
            className="textarea w-full p-3 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            placeholder="Enter Description"
          ></textarea>
        </fieldset>
        <button
          className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
        >
          Submit
        </button>
      </div>
    );
};

export default AddService;