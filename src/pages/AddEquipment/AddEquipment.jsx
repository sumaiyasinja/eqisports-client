import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const AddEquipmentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useContext(AuthContext);


  const onSubmit = (data) => {
    const equipment ={
        ...data,
        seller_name: user?.displayName || "Anonymous",
        seller_email: user?.email || "No Email Provided"
      }
      console.log(equipment);
    // console.log('Submitted Equipment:', equipment);

    fetch('http://localhost:5000/equipments', {
      method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(equipment),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            if (data.insertedId) {
            toast.success('Equipment added successfully!');
            reset(); 
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl mt-10">
     <Toaster />
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Sports Equipment</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          type="text"
          placeholder="Image URL"
          {...register("image", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          placeholder="Item Name"
          {...register("itemName", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          placeholder="Category Name"
          {...register("categoryName", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <textarea
          placeholder="Description"
          {...register("description", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="number"
          step="1"
          placeholder="Price (in USD)"
          {...register("price", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="number"
          step="0.5"
          placeholder="Rating (0 to 5)"
          {...register("rating", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          placeholder="Customization (e.g., extra grip)"
          {...register("customization", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          placeholder="Processing Time (e.g., 2-3 business days)"
          {...register("processingTime", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          {...register("stockStatus", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <PrimaryButton
          type= "submit"
          className="flex items-center cursor-pointer justify-center rounded-md bg-purple-800 hover:bg-white hover:text-purple-800 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"        >
        </PrimaryButton>
      </form>
    </div>
  );
};

export default AddEquipmentForm;
