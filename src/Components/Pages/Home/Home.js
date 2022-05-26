import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomePageReviews from './HomePageReviews';
import HomeParts from './HomeParts';
import LeatestProduct from './LeatestProduct';

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeParts />
            <LeatestProduct />
            <BusinessSummary />
            <HomePageReviews />
            <Footer />
        </div>
    );
};

export default Home;