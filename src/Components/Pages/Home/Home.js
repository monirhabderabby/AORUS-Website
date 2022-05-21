import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomePageReviews from './HomePageReviews';
import HomeParts from './HomeParts';

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeParts />
            <BusinessSummary />
            <HomePageReviews />
            <Footer />
        </div>
    );
};

export default Home;