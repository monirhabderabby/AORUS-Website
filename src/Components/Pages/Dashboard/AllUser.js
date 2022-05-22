import React from "react";
import { useQuery } from "react-query";
import Loader from "../Shared/Loader";

const AllUser = () => {
    const { data:users, isLoading, refetch } = useQuery("users", () =>
        fetch("http://localhost:5000/users", {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then((res) => res.json())
    );

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
                            users?.map((user, index)=> <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-xs btn-accent">Make admin</button>
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
