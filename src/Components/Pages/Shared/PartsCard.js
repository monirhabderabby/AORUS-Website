import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from "../../Hooks/useAdmin";

const PartsCard = ({product}) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const navigate = useNavigate();
    const {_id, name, description, img, minimumOrder, availableQuantity, price} = product;
    
    return (
        <div className="card card-compact lg:max-w-lg bg-base-100 p-6 shadow-xl" data-aos="zoom-out" data-aos-duration='1000'>
            <figure>
                <img className="h-48"
                    src={img}
                    alt=""
                />
            </figure>
            <div className="text-left leading-8">
                <h2 className="card-title">{name}</h2>
                <p>{description?.slice(0, 60)+"..."}</p>
                <p>Availavle: {availableQuantity} pcs</p>
                <p>Minimum Order: {minimumOrder} pcs</p>
                <p className="text-2xl font-semibold">${price}</p>
                <div className="card-actions">

                        <button className="btn btn-primary mt-2 text-white" disabled={admin} onClick={()=> navigate(`/purchase/${_id}`)}>Orders</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;
