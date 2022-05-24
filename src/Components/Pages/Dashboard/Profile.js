import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Profile = () => {
    const [user] = useAuthState(auth);

    const handleProfile = e => {
        e.preventDefault();
        const age = e.target.age.value;
        const institute = e.target.institute.value;
        const presentAddress = e.target.presentAddress.value;
        const parmanentAddress = e.target.parmanentAddress.value;
        const profile = {age, institute, presentAddress, parmanentAddress}
        console.log(profile);
    }
    return (
        <div className="flex justify-center">
            <section className="">
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src="https://api.lorem.space/image/face?hash=64318" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-secondary">Monir Hossain Rabby</h1>
                </div>
                <form className="flex flex-col w-full" onSubmit={handleProfile}>
            <input type="text" value={user?.displayName} class="input w-full input-bordered " readOnly />
            <input type="email" value={user?.email} class="input my-3 w-full input-bordered " readOnly />
            <input type="date" name="age" placeholder="Your age" class="input w-full mb-3 input-bordered"  />
            <input type="text" name="institute" placeholder="Your University / College" class="input w-full input-bordered max-w-xs"  />
            <textarea name="presentAddress" class="textarea textarea-bordered my-3" placeholder="Present Address"></textarea>
            <textarea name="parmanentAddress" class="textarea textarea-bordered" placeholder="Permanent Address"></textarea>
                <input type="submit" value="Update" className="btn btn-primary mt-3"/>
            
            </form>
            </section>
            
        </div>
    );
};

export default Profile;
