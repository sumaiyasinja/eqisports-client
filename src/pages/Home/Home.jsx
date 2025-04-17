import { useLoaderData } from 'react-router-dom';
import Banner from '../../component/Banner';
import EquipmentSection from '../../component/EquipmentSection';
import FAQSection from '../../component/FAQSection';
import TestimonialSection from '../../component/TestimonialSection';
import CategoriesSection from '../../component/CategoriesSection';


const Home = () => {
    const equipments = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <EquipmentSection equipments={equipments}/>
            <CategoriesSection></CategoriesSection>
            <TestimonialSection></TestimonialSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;