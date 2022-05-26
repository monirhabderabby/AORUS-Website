import React, {  useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loader from "../Shared/Loader";
import ProfileUpdateModal from "./ProfileUpdateModal";

const Profile = () => {
    const [user] = useAuthState(auth);
    const [openModal, setOpenModal]= useState(false);

    const {data: dbuser, isLoading, refetch}= useQuery(['user', user?.email] , ()=> fetch(`https://whispering-plains-56325.herokuapp.com/user/${user?.email}`).then(res=> res.json()))

    if(dbuser){
        console.log(dbuser);
    }
    if(isLoading){
        return <Loader></Loader>
    }

    
    return (
        <div className="flex justify-center">
            <section className="">
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={dbuser?.img || "https://api.lorem.space/image/face?hash=64318"} />
                    </div>
                </div>
                <form className="flex flex-col sm:max-w-sm md:w-[300px] lg:w-[350px]">
            <input type="text" value={user?.displayName} className="input w-full input-bordered " readOnly />
            <input type="email" value={user?.email} className="input my-3 w-full input-bordered " readOnly />
            <input type="text" name="age" value={dbuser?.birthDay} className="input w-full mb-3 input-bordered" readOnly />
            <input type="text" name="institute" value={dbuser.institutte} className="input w-full input-bordered" readOnly />
            <textarea name="presentAddress" className="textarea textarea-bordered my-3" value={dbuser.presentAddress} readOnly></textarea>
            <textarea name="parmanentAddress" className="textarea textarea-bordered" value={dbuser.parmanentAddress} readOnly></textarea>
            </form>
            <label type="submit" value="Update" onClick={()=> setOpenModal(true)} for="profileModal" className="btn btn-primary mt-3">Edit Profile</label>
            {
                openModal && <ProfileUpdateModal refetch={refetch} setOpenModal={setOpenModal} />
            }
            </section>
            
        </div>
    );
};

export default Profile;
