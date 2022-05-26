import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const AllOrders = () => {
    const {data, isLoading, refetch} = useQuery('allorders', ()=> fetch(`https://whispering-plains-56325.herokuapp.com/allorders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()))
    const handleShipping = id => {
        fetch(`https://whispering-plains-56325.herokuapp.com/shipping/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                refetch()
            }
        })
    }

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className=''>
            <h1 className="text-blue-700 font-bold text-3xl py-3">
                All Orders in one place 
            </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                    order.paid? <span className="badge text-white">paid</span> : <span className="badge">unpaid</span>
                                }
                            </td>
                            <td>
                            {
                                order.shipping ?
                                <button className='btn btn-sm bg-green-500 outline-none text-white' disabled>Shipping</button>
                                : <button className='btn btn-sm bg-red-500 outline-none text-white' onClick={()=>handleShipping(order?._id)}>Ship Now</button>
                            }
                            </td>
                        </tr>)
                        }
                    </tbody>
                    {/* {shipping ?  : } */}
                    
                </table>
                
            </div>
        </div>
    );
};

export default AllOrders;