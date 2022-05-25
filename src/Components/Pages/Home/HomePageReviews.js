import React, { useEffect, useState } from 'react';
import ReviewCard from '../Shared/ReviewCard';

const HomePageReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://whispering-plains-56325.herokuapp.com/review', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res=> res.json())
        .then(data=> setReviews(data))
    }, [])
    return (
        <div className='px-6 py-12 lg:px-12'>
            <h1 className='text-accent text-5xl font-bold px-4 my-12 border-x-8 rounded border-secondary inline-block'>What Our Customer Say's</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    reviews.map(review=> <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default HomePageReviews;