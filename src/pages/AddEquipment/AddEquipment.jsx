import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import Title from '../../component/Title';

const AddEquipment = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm();
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Cricket',
    'Football',
    'Basketball',
    'Boxing',
    'Badminton',
    'Tennis',
    'Others'
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setValue('categoryName', category);
  };

  const onSubmit = (data) => {
    const equipment = {
      ...data,
      seller_name: user?.displayName || 'Anonymous',
      seller_email: user?.email || 'No Email Provided'
    };
    console.log(equipment);

    fetch('https://sports-equipment-shop-server.vercel.app/equipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(equipment)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if (data.insertedId) {
          toast.success('Equipment added successfully!');
          reset();
          setSelectedCategory('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="max-w-4xl bg-purple-50 mx-auto p-6 sm:p-10 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl mt-10">
      <Toaster />
      <Title title="Add Sports Equipment " />
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        

        <div>
          <input
            type="text"
            placeholder="Item Name"
            {...register('itemName', { required: 'Item name is required' })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.itemName && <p className="text-red-500 text-sm mt-1">{errors.itemName.message}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Image URL"
            {...register('image', { required: 'Image URL is required' })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-800 text-white border-purple-800'
                    : 'bg-white text-purple-800 border-purple-400 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {errors.categoryName && <p className="text-red-500 text-sm mt-2">Category is required</p>}
        </div>

        <input
          type="hidden"
          {...register('categoryName', { required: 'Category is required' })}
          value={selectedCategory}
        />

        <div className="md:col-span-2">
          <textarea
            placeholder="Description"
            {...register('description', { required: 'Description is required' })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <input
            type="number"
            step="1"
            placeholder="Price (in USD)"
            {...register('price', { required: 'Price is required' })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <input
            type="number"
            step="0.5"
            placeholder="Rating (0 to 5)"
            {...register('rating', { required: 'Rating is required' })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>}
        </div>

        

        <div>
          <input
            type="text"
            placeholder="Processing Time (e.g., 2-3 business days)"
            {...register('processingTime', { required: 'Processing time is required' })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.processingTime && <p className="text-red-500 text-sm mt-1">{errors.processingTime.message}</p>}
        </div>

        <div>
          <input
            type="number"
            placeholder="Stock Quantity"
            {...register('stockStatus', { required: 'Stock quantity is required' })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.stockStatus && <p className="text-red-500 text-sm mt-1">{errors.stockStatus.message}</p>}
        </div>

        <div className='md:col-span-2'>
          <input
            type="text"
            placeholder="Customization (e.g., extra grip)"
            {...register('customization', { required: 'Customization info is required' })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {errors.customization && <p className="text-red-500 text-sm mt-1">{errors.customization.message}</p>}
        </div>

        <button
          type="submit"
          className="md:col-span-2 cursor-pointer w-full rounded-md bg-purple-800 hover:bg-white hover:text-purple-800 text-white px-6 py-3 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
        >
          Add Equipment
        </button>
      </form>
    </div>
  );
};

export default AddEquipment;
