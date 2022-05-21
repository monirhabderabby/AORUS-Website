import React from "react";

const ReviewCard = ({ review }) => {
    const { name, email, feedback, image } = review;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">
                        <div class="avatar online">
                            <div class="w-8 rounded-full">
                                <img src={image} alt="photo" />
                            </div>
                        </div>
                        <div className="text-left leading-3">
                            <p className="text-sm font-semibold">{name}</p>
                            <div>
                            <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 w-4 bg-green-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 w-4 bg-green-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 w-4 bg-green-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 w-4 bg-green-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 w-4 bg-green-400" />
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
