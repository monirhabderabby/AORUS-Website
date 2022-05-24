import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({price}) => {
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();


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
        </section>
    );
};

export default CheckOutForm;
