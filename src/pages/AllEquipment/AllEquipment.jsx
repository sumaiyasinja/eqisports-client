import { useLoaderData } from 'react-router-dom';
import Equipment from './Equipment';
import Title from '../../component/Title';

const AllEquipment = () => {
  const equipments = useLoaderData();
  return (
    <div className="container mx-auto   px-0 md:p-5 md:px-0">
      <Title class="md:my-8" title="All Sports Equipment"></Title>
      <div 
      className="p-5 md:p-0 grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-4 gap-10 items-start"
      >
      {equipments?.map(equipment => <Equipment key={equipment._id} equipment={equipment}></Equipment>)}
    </div>
    </div>
  );
};

export default AllEquipment;