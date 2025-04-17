import EquipmentCard from "./EquipmentCard";
import Title from './Title';

const EquipmentSection = ({equipments}) => {
  
  return (
  <div className="pt-5 md:pt-8">
    <Title title="All Sports Equipment"></Title>
      <div className="p-5 md:p-0 grid grid-cols-1   lg:grid-cols-3 2xl:grid-cols-4 gap-5 justify-between">
      {/* Equipment Card */}
      {equipments?.map(equipment => <EquipmentCard key={equipment._id} equipment={equipment}></EquipmentCard>)}
     
    </div>
  </div>
  );
};

export default EquipmentSection;
