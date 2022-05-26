import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loader from "../Shared/Loader";
import OrderModal from "./OrderModal";

const Purchase = () => {
    const { id } = useParams();
    const [order, setOrder]= useState({});
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const { data: product, isLoading } = useQuery("product", () =>
        fetch(`https://whispering-plains-56325.herokuapp.com/product/${id}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loader></Loader>;
    }
    return (
        <div>
            <div className="hero h-[90vh]">
                <div className="hero-content flex-col lg:flex-row lg:justify-center">
                    <div className="flex-1 flex justify-center">
                        <img
                            src={product?.img}
                            alt=""
                            className="max-w-sm rounded-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <section className="text-left">
                            <h3 className="text-2xl font-bold">{product?.name}</h3>
                            <p className="py-3">{product?.description}</p>
                            <p><span className="font-semibold">Available Now: </span>{product?.availableQuantity}</p>
                            <p className="py-2"><span className="font-semibold">Price: </span>{product?.price}$</p>
                            {
                                !admin && <label for="my-modal-6" className="btn btn-primary text-white mt-3 modal-button" onClick={()=>setOrder(product)}>Order Now</label>
                            }
                        </section>
                    </div>
                </div>
            </div>
            {
                order && <OrderModal product={product} setOrder={setOrder}></OrderModal>
            }
        </div>
    );
};

export default Purchase;
