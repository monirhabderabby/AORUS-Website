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
      <p class="mb-5">We are the number one motherBoard manufacturer company in the World. Our AORUS motherboard is specially for Gamers but everyone can use it. We will launch super powerfull motherboard in 2023. If you are interrested about our super powerfull motherboard please.</p>
      <button class="btn btn-primary">SUBSCRIBE</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;