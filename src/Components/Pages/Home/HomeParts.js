import React, { useEffect, useState } from 'react';
import PartsCard from './PartsCard';

const HomeParts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setProducts(data)
        })
    }, [])
    return (
        <div className='px-6 lg:px-12'>
            <h1 className='text-accent text-5xl font-bold px-4 my-12 border-x-8 rounded border-secondary inline-block'>Populer Parts</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product=> <PartsCard product={product} key={product._id}></PartsCard>)
            }
        </div>
        </div>
    );
};

export default HomeParts;