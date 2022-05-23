import React from "react";

const Profile = () => {
    return (
        <div className="flex justify-center mt-4">
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
            <input type="text" value={"Monir Hossain Rabby"} class="input w-full input-bordered max-w-xs" readOnly />
            <input type="email" value={"monirhrabby.personal@gmail.com"} class="input my-3 w-full input-bordered max-w-xs" readOnly />
            <input type="text" placeholder="Your age" class="input w-full input-bordered max-w-xs" readOnly />
            </form>
            </section>
            
        </div>
    );
};

export default Profile;
