import React from "react";
import { Link } from "react-router-dom";

const PartsCard = ({product}) => {
    const {_id, name, description, img, minimumOrder, availableQuantity, price} = product;
    return (
        <div className="card card-compact lg:max-w-lg bg-base-100 p-6 shadow-xl" data-aos="fade-up-right" data-aos-duration='1000'>
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
                    <Link to={`/purchase/${_id}`} className="btn btn-primary mt-2 text-white">Orders</Link>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;
