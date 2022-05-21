import React from 'react';
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
        </div>
    );
};

export default Home;