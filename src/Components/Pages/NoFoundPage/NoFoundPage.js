import React from "react";
import { Link } from "react-router-dom";
import noPageImg from "../../Assets/Images/nopagefound.jpg";

const NoFoundPage = () => {
    return (
        <div>
            <div
                className="hero h-[90vh]"
                style={{
                    background: `url(${noPageImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-white">
                        <h1 className="mb-5 text-5xl font-bold uppercase">
                            We are sorry, page not found!
                        </h1>
                        <p className="mb-5 uppercase">
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
