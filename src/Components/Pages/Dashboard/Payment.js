import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(
    "pk_test_51L1O6gI47NxtigIiVGGa6N58wX0VUowpwuRXE3omGHjeO52ZKFDFGDlbwECCAO4DpajaCMxEYsIyhsbK8YY3bRQc00siTVLMiA"
);

const Payment = () => {
    const {id} = useParams();
    const {data:order, isLoading} = useQuery(["order", id], ()=> fetch(`https://whispering-plains-56325.herokuapp.com/order/${id}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res=> res.json()))

    const calculatedPrice = parseInt(order?.price)*parseInt(order?.orderQuantity)

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className="flex flex-col justify-center h-[80vh] items-center gap-8 ">
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="p-6 text-left">
                    <h2 class="card-title text-secondary">
                        Hello, {order?.name}
                    </h2>
                    <p className='my-2'>
                        <span className='font-semibold'>Payment for:</span> {order?.productName} is processing...
                    </p>
                    <p><span className='font-semibold'>Quantity:</span> {order?.orderQuantity}</p>
                    <p className='my-2'><span className='font-semibold'>Please Pay:</span> ${calculatedPrice}</p>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="p-6 w-96">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;