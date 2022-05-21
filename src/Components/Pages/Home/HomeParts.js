import React, { useEffect, useState } from 'react';

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
        <div>
            <h1 className='text-accent text-5xl font-bold px-4 my-12 border-x-8 rounded border-secondary inline-block'>Populer Parts</h1>


        </div>
    );
};

export default HomeParts;