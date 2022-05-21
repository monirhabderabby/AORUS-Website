import React from 'react';
import motherBoard from '../../Assets/Images/motherboard.jpg'

const Banner = () => {
    return (
        <div style={{
            background: `url(${motherBoard})`,
            backgroundSize: "cover",
            objectFit: "contain"
        }}>
            <div class="hero min-h-screen">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="md:max-w-md lg:max-w-lg">
      <h1 class="mb-5 text-5xl font-bold">AORUS MOTHERBOARD</h1>
      <p class="mb-5">With  technology  moving so  fast, AORUS still keep up with the latest trends and provide our customers with advanced features and latest technology. GIGABYTE Z690 Series motherboards come with upgraded power solution, latest storage standards and outstanding connectivity to enable optimize performance for gaming.​</p>
      <button class="btn btn-primary">SUBSCRIBE</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;