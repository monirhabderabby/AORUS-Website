import React, {  useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loader from "../Shared/Loader";
import ProfileUpdateModal from "./ProfileUpdateModal";

const Profile = () => {
    const [user] = useAuthState(auth);
    const [openModal, setOpenModal]= useState(false);

    const {data: dbuser, isLoading}= useQuery(['user', user?.email] , ()=> fetch(`http://localhost:5000/user/${user?.email}`).then(res=> res.json()))

    if(dbuser){
        console.log(dbuser);
    }
    if(isLoading){
        return <Loader></Loader>
    }

    
    return (
        <div className="flex justify-center">
            <section className="">
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src={dbuser?.img || "https://api.lorem.space/image/face?hash=64318"} />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-secondary">Monir Hossain Rabby</h1>
                </div>
                <form className="flex flex-col w-full">
            <input type="text" value={user?.displayName} class="input w-full input-bordered " readOnly />
            <input type="email" value={user?.email} class="input my-3 w-full input-bordered " readOnly />
            <input type="text" name="age" value={dbuser?.birthDay} class="input w-full mb-3 input-bordered" readOnly />
            <input type="text" name="institute" value={dbuser.institutte} class="input w-full input-bordered max-w-xs" readOnly />
            <textarea name="presentAddress" class="textarea textarea-bordered my-3" value={dbuser.presentAddress} readOnly></textarea>
            <textarea name="parmanentAddress" class="textarea textarea-bordered" value={dbuser.parmanentAddress} readOnly></textarea>
            </form>
            <label type="submit" value="Update" onClick={()=> setOpenModal(true)} for="profileModal" className="btn btn-primary mt-3">Edit Profile</label>
            {
                openModal && <ProfileUpdateModal setOpenModal={setOpenModal} />
            }
            </section>
            
        </div>
    );
};

export default Profile;
