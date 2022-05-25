import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOutForm = ({order}) => {
    const [cardError, setCardError] = useState("");
    const [paymentSucces, setPaymentSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const {price, _id} = order;


    useEffect(()=> {
        fetch('http://localhost:5000/create-payment-intent', {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({price})
        })
        .then(res=> res.json())
        .then(data=> {
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })
    }, [price])
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error?.message);
        } else {
            setCardError("");
        }

        setPaymentSuccess('')
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order?.name,
                        email: order?.email
                    },
                },
            },
        );

        if(intentError){
            setCardError(intentError?.message)
        }
        else{
            setCardError('')
            setPaymentSuccess("Your payment is completed!")
            await setTransactionId(paymentIntent.id)
            fetch(`http://localhost:5000/order/paid/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({transactionId})
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.acknowledged){
                    toast.success("Your payment is Confirmed!")
                    navigate('/dashboard/myorder')
                }
            })
        }
    };
    return (
        <section>
            <form onSubmit={handleSubmit} className="text-left">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-sm btn-secondary text-white mt-6" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
            {
                paymentSucces && <p className="text-green-500">{paymentSucces}</p>
            }
        </section>
    );
};

export default CheckOutForm;
