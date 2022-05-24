import React from "react";
import { Link } from "react-router-dom";
import noPageImg from "../../Assets/Images/nopagefound.jpg";

const NoFoundPage = () => {
    return (
        <div>
            <div
                class="hero h-[90vh]"
                style={{
                    background: `url(${noPageImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div class=""></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="text-white">
                        <h1 class="mb-5 text-5xl font-bold uppercase">
                            We are sorry, page not found!
                        </h1>
                        <p class="mb-5 uppercase">
                            The page you are looking for might have been removed
                            had it names changed or it's temporarily unavailable
                        </p>
                        <Link
                            to="/"
                            className="btn btn-primary text-white uppercase"
                        >
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoFoundPage;
