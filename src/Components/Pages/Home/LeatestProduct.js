import React from 'react';
import bg from '../../Assets/Images/partsBanner.jpg'

const LeatestProduct = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className="py-3">
            <div className='flex items-center justify-around p-3'>
            <div className='text-left text-white'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl text-white font-bold'>Comming Soon</h1>
            <p className='my-2 '>Very soon we will lounch most powerfull motherboard in the world</p>
            <button className='btn btn-primary text-white btn-md'>SUBSCRIBE</button>
            </div>
            <img className='w-[30%]' src="https://static.gigabyte.com/StaticFile/Image/Global/a69f9bb87f60c6790231072d435c9d13/Product/30267/webp/1000" alt="" />
            </div>
        </div>
    );
};

export default LeatestProduct;