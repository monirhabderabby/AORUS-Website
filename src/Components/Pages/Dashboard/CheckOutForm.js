import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckOutForm = () => {
    const [cardError, setCardError] = useState("");
    const stripe = useStripe();
    const elements = useElements();
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
                <button type="submit" className="btn btn-sm btn-secondary text-white mt-6" disabled={!stripe || !elements}>
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
