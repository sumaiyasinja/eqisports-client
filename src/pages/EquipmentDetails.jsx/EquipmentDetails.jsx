import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaBoxOpen } from 'react-icons/fa';
import { MdOutlineCategory } from 'react-icons/md';

const EquipmentDetails = () => {
  const equipment = useLoaderData();
  const {
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    seller_name,
    seller_email,
  } = equipment;

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-12 mt-10 bg-white dark:bg-clr-dark rounded-3xl shadow-xl space-y-8">
      <img
        src={image}
        alt={itemName}
        className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
      />

      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-300">{itemName}</h2>

        <div className="flex items-center text-lg gap-2 text-gray-600 dark:text-gray-300">
          <MdOutlineCategory className="text-purple-500 text-xl" />
          <span>{categoryName}</span>
        </div>

        <p className="text-gray-700 dark:text-gray-200">{description}</p>

        <div className="flex flex-wrap gap-4 mt-6">
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium text-sm">
            Price: ${price}
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {rating}
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-1">
            <FaBoxOpen /> Stock: {stockStatus}
          </span>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mt-4">
          <p><strong>Customization:</strong> {customization}</p>
          <p><strong>Processing Time:</strong> {processingTime}</p>
        </div>

        <div className="border-t pt-4 text-sm text-gray-600 dark:text-gray-300 space-y-1">
          <p><strong>Seller:</strong> {seller_name}</p>
          <p><strong>Email:</strong> {seller_email}</p>
        </div>

        <button className="mt-6 w-full md:w-fit px-6 py-3 bg-purple-800 hover:bg-purple-900 text-white rounded-xl transition-all font-semibold shadow-md">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default EquipmentDetails;
