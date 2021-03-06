import React from "react";
import {
    FlagIcon,
    PresentationChartLineIcon,
    UserGroupIcon,
    HeartIcon,
} from "@heroicons/react/solid";

const BusinessSummary = () => {
    return (
        <div className="py-24 my-12 px-6 md:px-12 lg:px-12">
            <div className="mb-12">
                <h1 className="text-accent font-bold text-5xl">
                    Million of Business Trust Us
                </h1>
                <small>Try to understant User Expection</small>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                <div className="flex flex-col items-center">
                    <FlagIcon className="h-12 w-12 text-blue-500" />
                    <p className="text-3xl font-bold">101+</p>
                    <p className="text-secondary">Countries</p>
                </div>
                <div className="flex flex-col items-center">
                    <PresentationChartLineIcon className="h-12 w-12 text-blue-500" />
                    <p className="text-3xl font-bold">$3.1B</p>
                    <p className="text-secondary">sale/month</p>
                </div>
                <div className="flex flex-col items-center">
                    <UserGroupIcon className="h-12 w-12 text-blue-500" />
                    <p className="text-3xl font-bold">4471+</p>
                    <p className="text-secondary">Happy Clients</p>
                </div>
                <div className="flex flex-col items-center">
                    <HeartIcon className="h-12 w-12 text-blue-500" />
                    <p className="text-3xl font-bold">13350+</p>
                    <p className="text-secondary">Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;
