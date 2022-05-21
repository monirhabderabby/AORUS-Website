import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HomeParts from './HomeParts';

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeParts />
            <BusinessSummary />
        </div>
    );
};

export default Home;