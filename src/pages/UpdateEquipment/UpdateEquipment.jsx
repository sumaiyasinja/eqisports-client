import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const UpdateEquipment= ({ equipment }) => {
  // Initialize the form with default values taken from the equipment prop.
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: equipment.image || '',
      itemName: equipment.itemName || '',
      categoryName: equipment.categoryName || '',
      description: equipment.description || '',
      price: equipment.price || '',
      rating: equipment.rating || '',
      customization: equipment.customization || '',
      processingTime: equipment.processingTime || '',
      stockStatus: equipment.stockStatus || '',
      seller_name: equipment.seller_name || '',
      seller_email: equipment.seller_email || '',
    },
  });

  const onSubmit = (data) => {
    // Ensure seller information remains unchanged.
    const updatedEquipment = {
      ...data,
      seller_name: equipment.seller_name,
      seller_email: equipment.seller_email,
    };

    // Send a PUT request to update the equipment on the server.
    fetch(`http://localhost:5000/equipments/${equipment._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.modifiedCount) {
          toast.success('Equipment updated successfully!');
          reset(updatedEquipment);
        }
      })
      .catch((error) => {
        console.error('Error updating equipment:', error);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl mt-10">
      <Toaster />
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Update Sports Equipment
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          type="text"
          placeholder="Image URL"
          defaultValue={equipment.image || ''}
          {...register('image', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          placeholder="Item Name"
          defaultValue={equipment.itemName || ''}
          {...register('itemName', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          placeholder="Category Name"
          defaultValue={equipment.categoryName || ''}
          {...register('categoryName', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <textarea
          placeholder="Description"
          defaultValue={equipment.description || ''}
          {...register('description', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="number"
          step="1"
          placeholder="Price (in USD)"
          defaultValue={equipment.price || ''}
          {...register('price', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="number"
          step="0.5"
          placeholder="Rating (0 to 5)"
          defaultValue={equipment.rating || ''}
          {...register('rating', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          placeholder="Customization (e.g., extra grip)"
          defaultValue={equipment.customization || ''}
          {...register('customization', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="text"
          placeholder="Processing Time (e.g., 2-3 business days)"
          defaultValue={equipment.processingTime || ''}
          {...register('processingTime', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          defaultValue={equipment.stockStatus || ''}
          {...register('stockStatus', { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />

        {/* Seller Name and Email are shown but disabled */}
        <input
          type="text"
          placeholder="Seller Name"
          defaultValue={equipment.seller_name || ''}
          {...register('seller_name')}
          disabled
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
        />
        <input
          type="text"
          placeholder="Seller Email"
          defaultValue={equipment.seller_email || ''}
          {...register('seller_email')}
          disabled
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none transition-all duration-300"
        >
          Update Equipment
        </button>
      </form>
    </div>
  );
};

export default UpdateEquipment;
