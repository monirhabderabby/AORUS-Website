import React from "react";

const PartsCard = ({product}) => {
    const {_id, name, description, image, minimumOrder, availableQuantity, price} = product;
    return (
        <div class="card card-compact lg:max-w-lg bg-base-100 p-6 shadow-xl">
            <figure>
                <img className="h-48"
                    src={image}
                    alt="Shoes"
                />
            </figure>
            <div class="text-left gap-4">
                <h2 class="card-title">{name}</h2>
                <p>{description.slice(0, 60)+"..."}</p>
                <p className="text-2xl font-semibold">${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;
