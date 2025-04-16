import React from 'react';
import Navbar from '../../component/Navbar';
import { Footer } from '../../component/Footer';
import Banner from '../../component/Banner';

const Home = () => {
    return (
        <div>
            <Navbar />
            <p>Home page</p>
            <Banner></Banner>
            <Footer />
        </div>
    );
};

export default Home;