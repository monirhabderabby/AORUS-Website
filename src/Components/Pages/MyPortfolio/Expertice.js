import React from 'react';
import html from '../../Assets/Images/html.png'
import css from '../../Assets/Images/css.png'
import mongo from '../../Assets/Images/download.png'
import react from '../../Assets/Images/react.png'

const Expertice = () => {
    return (
        <div className='px-12'>
            <h1 className='font-bold text-accent text-5xl' id='expertice'>My Expertice</h1>
            <div className='grid grid-cols-3 gap-5 text-center mt-24'>
                <div className='text-center'>
                    <img src={html} className="w-48" alt="" />
                </div>
                <div>
                    <img src={css} className="w-40" alt="" />
                </div>
                <div>
                    <img src={mongo} className="w-48" alt="" />
                </div>
                <div>
                    <img src={react} className="w-48" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Expertice;