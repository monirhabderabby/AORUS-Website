import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../Assets/Logo/AORUS_LOGO.png";

const Navbar = () => {
    const navigate = useNavigate()

    //React firebase hooks
    const [user] = useAuthState(auth);
    const {data: dbuser, isLoading, refetch}= useQuery(['user', user?.email] , ()=> fetch(`https://whispering-plains-56325.herokuapp.com/user/${user?.email}`).then(res=> res.json()))
    
    //All function
    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem("accessToken");
        navigate('/')
    }

    if(isLoading){
        return;
    }
    return (
        <div className="lg:px-12">
            <div className="navbar bg-transparent h-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/parts">Parts</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                            <Link to="/myportfolio">My Portfolio</Link>
                        </li>
                            {
                            user && <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        }
                            {
                                user ? 
                                    <li>
                                        <div class="dropdown sm:dropdown-right md:dropdown-right dropdown-right "><img src={dbuser?.img} className="w-8 rounded-full" alt="" />
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li> <Link to="/dashboard">Profile</Link> </li>
    <li><button onClick={handleLogout}>SignOut</button></li>
  </ul>
</div>
                                    </li>
                                :
                                <li><Link to="/login">Login</Link></li>
                        }
                        </ul>
                    </div>
                    <div>
                        <img src={logo} className="w-20" alt="logo" />
                    </div>
                </div>
                <div className="navbar-end lg:hidden">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost lg:hidden"
                        for="my-drawer-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/parts">Parts</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/myportfolio">My Portfolio</Link>
                        </li>
                        {
                            user && <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        }
                        {
                                user ? 
                                    <li>
                                        <div class="dropdown dropdown-hover dropdown-left"><img src={dbuser?.img} className="w-8 rounded-full" alt="" />
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li> <Link to="/dashboard">Profile</Link> </li>
    <li><button onClick={handleLogout}>SignOut</button></li>
  </ul>
</div>
                                    </li>
                                :
                                <li><Link to="/login">Login</Link></li>
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;