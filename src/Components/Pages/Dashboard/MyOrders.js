import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loader from "../Shared/Loader";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrders = () => {
    const [openModal, setOpenModal] = useState(false);
    const [orderId, setOrderId] = useState("")
    const [user] = useAuthState(auth);
    const {data:products, isLoading, refetch}= useQuery("userOrders", ()=> fetch(`https://whispering-plains-56325.herokuapp.com/orders/${user?.email}`, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res=> res.json()))

    const startOrderCancleProcessing = id => {
        setOpenModal(true);
        setOrderId(id)

    }

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className="text-blue-700 font-bold text-3xl py-3">
                All Orders in one place {products?.length}
            </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-center">
                            <th>S/L</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index)=> <tr className="text-center">
                                <td>{index+1}</td>
                                <td><img src={product.img} className="w-8 md:w-16 lg:w-16" alt="" /></td>
                                <td className="text-sm md:text-lg lg:text-lg">{product.productName}</td>
                                <td>{product.paid ? 
                                <div className="flex flex-col">
                                    <button className="btn btn-xs btn-success" disabled>Paid</button>
                                    <small>{product?.transactionId?.transactionId}</small>
                                </div> 
                                
                                : 
                                
                                <Link to={`/dashboard/payment/${product._id}`}><button className="btn btn-xs btn-primary text-white">Pay</button></Link>}</td>
                                <td>{product.paid ? <button className="btn btn-accent btn-sm text-white" disabled>Shipping</button> : <label for="cancleConfirmation" className="btn btn-xs btn-error text-white modal-button" onClick={()=>startOrderCancleProcessing(product?._id)}>Cancle</label>}</td>
                            </tr>)
                            
                        }
                    </tbody>
                    
                    {
                    openModal && <DeleteOrderModal refetch={refetch} orderId={orderId} setOpenModal={setOpenModal}/>
                }
                </table>
                
            </div>
        </div>
    );
};

export default MyOrders;
