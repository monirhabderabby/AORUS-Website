import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loader from "../Shared/Loader";
import { toast } from "react-toastify";

const AddReview = () => {
    const [user] = useAuthState(auth);

    //load user
    const {data, isLoading} = useQuery('user', ()=> fetch(`https://whispering-plains-56325.herokuapp.com/user/${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res=> res.json()))

    const handleReview = e => {
        e.preventDefault();
        const name = data?.name;
        const email = data?.email;
        const img = data?.img;
        const rating = e.target.rating.value;
        const feedback = e.target.feedback.value;

        const review = {
            name,
            email,
            img,
            rating,
            feedback
        }
        fetch('https://whispering-plains-56325.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                e.target.reset();
                toast.success("Thanks for your feedback!")
            }
        })
        


    }
    if(isLoading){
        return <Loader />
    }
    return (
        <div className="flex justify-center h-[60vh] items-center">
            <form className="shadow-xl w-96 p-4 rounded-lg" onSubmit={handleReview}>
                <input type="text" className="input w-full input-bordered" value={data?.name} />
                <input type="email" className="input w-full input-bordered my-3" value={data?.email} />
                <label htmlFor="rating" className="label label-text text-accent">Select your rating </label>
                <select name="rating" className="input w-full input-bordered">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea name="feedback" class="textarea textarea-bordered w-full my-3" placeholder="Write your feedback"></textarea>
                <input type="submit" className="uppercase w-full text-white btn btn-accent" value="Post Review" />
            </form>
        </div>
    );
};

export default AddReview;
