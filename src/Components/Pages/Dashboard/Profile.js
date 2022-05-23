import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Profile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="flex mt-4">
            <section className="">
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src="https://api.lorem.space/image/face?hash=64318" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-secondary">Monir Hossain Rabby</h1>
                </div>
                <form>
            <input type="text" value={user?.displayName} class="input w-full input-bordered max-w-xs" readOnly />
            <input type="email" value={user?.email} class="input my-3 w-full input-bordered max-w-xs" readOnly />
            <input type="text" placeholder="Your age" class="input w-full input-bordered max-w-xs"  />
            </form>
            </section>
            
        </div>
    );
};

export default Profile;
