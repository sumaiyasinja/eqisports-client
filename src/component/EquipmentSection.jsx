import EquipmentCard from "./EquipmentCard";
import Title from './Title';
import { Link } from 'react-router-dom'; 

const EquipmentSection = ({ equipments }) => {
  const visibleEquipments = equipments?.slice(0, 6);

  return (
    <div className="pt-5 md:pt-8">
      <Title title="Popular Sports Equipment" />
      
      <div className="p-5 md:p-0 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-7 lg:gap-10 justify-between">
        {visibleEquipments.map(equipment => (
          <EquipmentCard key={equipment._id} equipment={equipment} />
        ))}
      </div>

      {equipments?.length > 6 && (
        <div className="flex justify-center mt-6">
          <Link 
            to="/allEquipment" 
            className="flex items-center cursor-pointer justify-center rounded-md bg-purple-800 hover:bg-white hover:text-purple-800 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
            Show More
          </Link>
        </div>
      )}
    </div>
  );
};

export default EquipmentSection;
