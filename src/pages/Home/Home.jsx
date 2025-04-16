import { useLoaderData } from 'react-router-dom';
import Banner from '../../component/Banner';
import EquipmentSection from '../../component/EquipmentSection';


const Home = () => {
    const equipments = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <EquipmentSection equipments={equipments}/>
        </div>
    );
};

export default Home;