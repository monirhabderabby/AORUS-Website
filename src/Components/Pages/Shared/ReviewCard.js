import React from "react";

const ReviewCard = ({ review }) => {
    const { name, feedback, img, rating } = review;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="avatar online">
                            <div className="w-8 rounded-full">
                                <img src={img} alt="photo" />
                            </div>
                        </div>
                        <div className="text-left leading-3">
                            <p className="text-sm font-semibold">{name}</p>
                            <div>
                                <div className="rating">
                                    <small className="font-semibold">Rating: <span>5/{rating}</span></small>
                                </div>
                            </div>
                        </div>
                    </h2>
                    <div className="text-left mt-4">
                        <p>{feedback}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
