import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loader from "../Shared/Loader";

const OrderModal = ({product, setOrder}) => {
    const navigate = useNavigate()
    const [user, loading]= useAuthState(auth)
    const handlePlaceOrder = e=> {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pickupLocation = e.target.location.value;
        const productName = e.target.productName.value;
        const orderQuantity = e.target.orderQuantity.value;
        const minimumOrder = product?.minimumOrder;
        const availableQuantity = product?.availableQuantity;
        const price = product?.price;

        //create an order formet
        const order = {
            name, email, pickupLocation, productName, orderQuantity, paid: false, price, _id: product?._id
        }

        if(parseInt(orderQuantity) < parseInt(minimumOrder)){
            toast.error(`Please! Place an order minimum ${minimumOrder} pcs`)
        }
        else if(parseInt(orderQuantity) > parseInt(availableQuantity)){
            toast.error(`Sorry! We have only ${availableQuantity} pcs`)
        }

        if(parseInt (orderQuantity) > parseInt(minimumOrder) && parseInt(orderQuantity) < parseInt(availableQuantity)){
            fetch('http://localhost:5000/order', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(order)
            })
            .then(res=> {
                if(res.status === 401 || res.status === 403){
                    toast.error("failed to place an order!")
                }
                return res.json();
            })
            .then(data=> {
                if(data.acknowledged){
                    toast.success("successfully placed order!")
                    setOrder("");
                    navigate('/')
                }
            })
            
        }

    }

    if(loading){
        return <Loader></Loader>
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl">Please Provide information for Order</h3>
                    <form onSubmit={handlePlaceOrder}>
                    <input type="text" name="name" value={user?.displayName} class="input input-bordered w-full" readOnly />
                    <input type="text" name="email" value={user?.email} class="input input-bordered w-full my-3" readOnly />
                    <input type="text" name="location" placeholder="Enter your pickup location" class="input input-bordered w-full my-3"  />
                    <input type="text" name="productName" value={product?.name} class="input input-bordered w-full mb-3" readOnly />
                    <input type="number" name="orderQuantity"  placeholder={`Minimum order ${product?.minimumOrder}`} class="input input-bordered w-full mb-3" />
                    <input type="submit" value="Place Order" className="btn btn-primary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
