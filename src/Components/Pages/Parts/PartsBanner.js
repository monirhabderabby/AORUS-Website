import React from 'react';
import banner from '../../Assets/Images/partsBanner.jpg'

const PartsBanner = () => {
    return (
        <div style={{
            background: `url(${banner})`,
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center",
        }}>
            <div className="hero sm:h-[40vh] lg:h-[50vh]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="md:max-w-md lg:max-w-lg">
      <h1 className="mb-5 text-5xl font-bold text-white" data-aos="fade-right" data-aos-duration='1000'>Gaming MotherBoard</h1>
      <p className="mb-5" data-aos="zoom-out" data-aos-delay="400" data-aos-duration='1000'>AORUS is most populer gaming motherboard manufacturer. Gaming motherboard is too much neccesary for best gaming performance. So, choose from us.​</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default PartsBanner;