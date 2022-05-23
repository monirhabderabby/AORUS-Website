import React from 'react';
import motherBoard from '../../Assets/Images/motherboard.jpg'

const Banner = () => {
    return (
        <div style={{
            background: `url(${motherBoard})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center",
            objectFit: "contain",
        }}>
            <div className="hero min-h-screen ">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="md:max-w-md lg:max-w-lg">
      <h1 className="mb-5 text-5xl font-bold text-white" data-aos="fade-right" data-aos-duration='1000'>AORUS MOTHERBOARD</h1>
      <p className="mb-5" data-aos="zoom-out" data-aos-delay="400" data-aos-duration='1000'>With  technology  moving so  fast, AORUS still keep up with the latest trends and provide our customers with advanced features and latest technology. GIGABYTE Z690 Series motherboards come with upgraded power solution, latest storage standards and outstanding connectivity to enable optimize performance for gaming.​</p>
      <button className="btn btn-primary">SUBSCRIBE</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;