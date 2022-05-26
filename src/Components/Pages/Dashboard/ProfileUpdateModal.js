import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ProfileUpdateModal = ({setOpenModal, refetch}) => {
    const [user] = useAuthState(auth);
    const handleProfile = (e) => {
        e.preventDefault();
        const age = e.target.age.value;
        const institute = e.target.institute.value;
        const presentAddress = e.target.presentAddress.value;
        const parmanentAddress = e.target.parmanentAddress.value;
        const img = e.target.img.value
        const profile = { age, institute, presentAddress, parmanentAddress, img };

        fetch(`https://whispering-plains-56325.herokuapp.com/profile/${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(profile),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.acknowledged){
                    refetch()
                    setOpenModal(false)
                
                }
            });
    };
    return (
        <div>
            <input type="checkbox" id="profileModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label for="profileModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className="flex flex-col w-full pt-6" onSubmit={handleProfile}>
                        <input
                            type="text"
                            value={user?.displayName}
                            className="input w-full input-bordered "
                            readOnly
                        />
                        <input
                            type="email"
                            value={user?.email}
                            className="input my-3 w-full input-bordered "
                            readOnly
                        />
                        <input
                            type="date"
                            name="age"
                            placeholder="Birthday"
                            className="input w-full mb-3 input-bordered"
                        />
                        <input
                            type="text"
                            name="institute"
                            placeholder="Your University / College"
                            className="input w-full input-bordered"
                        />
                        <textarea
                            name="presentAddress"
                            className="textarea textarea-bordered my-3"
                            placeholder="Present Address"
                        ></textarea>
                        <textarea
                            name="parmanentAddress"
                            className="textarea textarea-bordered"
                            placeholder="Permanent Address"
                        ></textarea>
                        <input 
                        name="img"
                        className="input w-full input-bordered mt-3"
                        placeholder="Your profile img link"
                        />
                        <input
                            type="submit"
                            value="Update"
                            className="btn btn-primary mt-3"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdateModal;
