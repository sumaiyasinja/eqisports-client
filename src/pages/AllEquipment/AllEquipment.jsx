import { useLoaderData } from 'react-router-dom';
import Title from '../../component/Title';
import Equipment from './Equipment';
import Carousel from '../../component/Carousel';

const AllEquipment = () => {
  const equipments = useLoaderData();

  return (
    <div className="container mx-auto px-2 md:p-5">
      <Carousel />
      <Title class="md:my-8" title="All Sports Equipment" />
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white dark:bg-clr-dark table-auto">
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
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {equipments?.map(equipment => (
              <Equipment key={equipment._id} equipment={equipment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
