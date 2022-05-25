import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loader from "../Shared/Loader";

const AllUser = () => {
    const { data:users, isLoading, refetch } = useQuery("users", () =>
        fetch("https://whispering-plains-56325.herokuapp.com/users", {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then((res) => res.json())
    );

    const makeAdmin = email => {
        fetch(`https://whispering-plains-56325.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res=> {
            if(res.status === 403){
                toast.error("Forbidden Access")
            }
            return res.json();
        }).then(data=> {
            if(data.modifiedCount > 0){
                toast.success("successfully make an admin!")
                refetch();
            }
        })
    }

    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className="text-blue-700 font-bold text-3xl py-3">
                All USERS LIST {users?.length}
            </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>S/L</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=> <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role !== "admin" && <button className="btn btn-xs btn-accent" onClick={()=>makeAdmin(user.email)}>Make admin</button>
                                    }
                                    {
                                        user.role === "admin" && <span class="badge">{user.role}</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default AllUser;
