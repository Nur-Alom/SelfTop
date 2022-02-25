import React from 'react';
import './Home.css';
import Header from '../../Shared/Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import Footer from '../../Shared/Footer/Footer';
import LoadProduct from '../Products/LoadProduct/LoadProduct';

const Home = () => {
    return (
        <div className=''>
            <Header />
            <HomeBanner />
            <br />
            <LoadProduct />
            <Footer />
        </div>
    );
};

export default Home;