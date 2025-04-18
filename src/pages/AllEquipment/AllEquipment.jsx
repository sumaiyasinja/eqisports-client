import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Title from '../../component/Title';
import Equipment from './Equipment';
import Carousel from '../../component/Carousel';

const AllEquipment = () => {
  const equipments = useLoaderData();
  const [sortOrder, setSortOrder] = useState('default');

  const sortedEquipments = [...equipments].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    return 0; // default order
  });

  return (
    <div className="container mx-auto px-2 md:p-5">
      <Carousel />
      <Title class="md:my-8" title="All Sports Equipment" />

      <div className="flex justify-end mb-4 items-center">
        <label className="mr-2 text-sm font-medium">Sort by Price:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-1 rounded-md  focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-200 ease-in-out"
        >
          <option value="default hover:bg-purple-700">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
        {/* <thead className="bg-purple-700 text-white text-left">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Description</th>
              <th className="p-3">Price</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Action</th>
            </tr>
          </thead> */}

      <div className="overflow-x-auto rounded-xl shadow container mx-auto">
        <table className="min-w-full bg-white dark:bg-clr-dark table-auto">
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {sortedEquipments?.map(equipment => (
              <Equipment key={equipment._id} equipment={equipment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
