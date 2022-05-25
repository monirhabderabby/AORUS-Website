import React from 'react';
import { useQuery } from 'react-query';
import Footer from '../Shared/Footer';
import Loader from '../Shared/Loader';
import PartsCard from '../Shared/PartsCard';
import PartsBanner from './PartsBanner';


const Parts = () => {
    const {data:products, isLoading} = useQuery("allProducts", ()=> fetch('https://whispering-plains-56325.herokuapp.com/parts').then(res=> res.json()))
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <PartsBanner />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-8 pb-12'>
                {
                    products?.map(product=> <PartsCard key={product._id} product={product} />)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Parts;