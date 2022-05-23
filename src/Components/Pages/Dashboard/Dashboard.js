import React from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li>
                        <Link to="/dashboard">Profile</Link>
                    </li>
                    {user && !admin && (
                        <>
                            <li>
                                <Link to="/dashboard/myorder">My Orders</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addreview">
                                    Add a Review
                                </Link>
                            </li>
                        </>
                    )}
                    {admin && (
                        <>
                            <li>
                                <Link to="/dashboard/allorders">
                                    All Orders
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/alluser">
                                    Manage Admin
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addproduct">Add new Product</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
