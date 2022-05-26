import React from "react";

const PortfolioBanner = () => {
    return (
        <div className="px-12">
            <section>
                <div className="hero min-h-screen">
                    <div className="hero-content flex justify-center flex-col lg:flex-row-reverse">
                        <img
                            src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/279966688_3258159264445245_5288604186253001020_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEt6Iqh8SDdQrDlJPvaDgrKhe-UeA03e0OF75R4DTd7QzKvoLtc--LbFKpy55BasEEDUWtGxI5Y7ck4yPESUvnI&_nc_ohc=eR0uEEvzv5cAX8U23l_&_nc_ht=scontent.fdac27-1.fna&oh=00_AT8QUYN8Kigqfw1zxQKO2o_lRrBuf0n7nJn0Ru6CTnCHrQ&oe=629490A6"
                            className="lg:max-w-lg rounded-lg shadow-2xl" alt="img"
                        />
                        <div className="text-left lg:min-w-lg">
                            <h1 className="text-5xl font-bold">Junior Web Developer</h1>
                            <p className="py-6">
                                I am Monir Hossain Rabby. I am a junior Web Developer. I have expertice in Html, Css, Javascript, React, NodeJs, MongoDB. I started my web develper journey with Programming-Hero.
                            </p>
                            <button className="btn btn-primary">Check my Expertice</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioBanner;
