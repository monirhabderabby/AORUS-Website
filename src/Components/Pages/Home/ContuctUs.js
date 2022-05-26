import React from 'react';
import contactBG from '../../Assets/Images/conctactBG.jpg'

const ContuctUs = () => {
    return (
        <div style={{
            background: `url(${contactBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
        }} className="py-12 my-24 flex justify-center">
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
  <form className='flex flex-col '>
      <h1 className='text-2xl text-accent font-semibold mb-3'>Have some question?</h1>
            <input type="text" placeholder="Your Name" class="input input-bordered w-full" />
            <input type="text" placeholder="Your Email" class="input input-bordered w-full my-3" />
            <textarea class="textarea textarea-bordered mb-3" placeholder="Your Message"></textarea>
            <input type="submit" className='btn btn-primary text-white' value="SEND MESSAGE" />
            </form>
  </div>
</div>
            
            
        </div>
    );
};

export default ContuctUs;