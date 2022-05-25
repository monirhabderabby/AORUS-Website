import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const AllOrders = () => {
    const [shipping, setShipping] = useState(false);
    const {data, isLoading} = useQuery('allorders', ()=> fetch(`http://localhost:5000/allorders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()))
    if(data){
        console.log(data);
    }

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className="text-blue-700 font-bold text-3xl py-3">
                All Orders in one place 
            </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr className="text-center">
                            <th>S/L</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((order, index)=> <tr className="text-center">
                            <td>{index+1}</td>
                            <td><img src={order?.img} className="w-16" alt="" /></td>
                            <td>{order?.productName}</td>
                            <td>
                                {
                                    order.paid? <span class="badge text-white">paid</span> : <span class="badge">unpaid</span>
                                }
                            </td>
                            <td>{shipping ? <button className='btn btn-sm bg-green-500 outline-none text-white' disabled={shipping}>Shipping</button> : <button className='btn btn-sm bg-red-500 outline-none text-white' onClick={()=> setShipping(true)}>Ship Now</button>}</td>
                        </tr>)
                        }
                    </tbody>
                    
                </table>
                
            </div>
        </div>
    );
};

export default AllOrders;