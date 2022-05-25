import React, { useEffect, useState } from 'react';
import PartsCard from '../Shared/PartsCard';

const HomeParts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://whispering-plains-56325.herokuapp.com/parts')
        .then(res=> res.json())
        .then(data=> {
            setProducts(data)
        })
    }, [])
    return (
        <div className='px-6 py-24 lg:px-12'>
            <h1 className='text-accent text-3xl lg:text-5xl font-bold px-4 my-12 border-x-8 rounded border-secondary inline-block'>Leatest Products</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                products?.slice(0,8).map(product=> <PartsCard product={product} key={product._id}></PartsCard>)
            }
        </div>
        </div>
    );
};

export default HomeParts;