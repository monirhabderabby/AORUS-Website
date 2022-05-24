import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loader from "../Shared/Loader";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const {data:products, isLoading}= useQuery("userOrders", ()=> fetch(`http://localhost:5000/orders/${user?.email}`).then(res=> res.json()))

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className="text-blue-700 font-bold text-3xl py-3">
                All Orders in one place {products?.length}
            </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>S/L</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index)=> <tr>
                                <td>{index+1}</td>
                                <td><img src={product.img} className="w-20" alt="" /></td>
                                <td>{product.productName}</td>
                                <td>{product.paid ? <button className="btn btn-xs btn-success" disabled>Paid</button> : <button className="btn btn-xs btn-primary text-white">Pay</button>}</td>
                                <td>{!product.paid && <button className="btn btn-xs btn-error text-white">Cancel</button>}</td>
                            </tr>)
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
