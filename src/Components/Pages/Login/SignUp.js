import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import google from '../../Assets/Logo/google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loader from "../Shared/Loader";

const Login = () => {
    const navigate = useNavigate();

    //React form hooks
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    //React firebase hooks
    const [signInWithGoogle, GUser, GLoading, GError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, UError] = useUpdateProfile(auth);


    if(GLoading || loading || updating){
        return <Loader></Loader>
    }
    if(GUser || user){
        navigate('/')
    }


    const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name})

    }
    return (
        <div className="flex justify-center h-[90vh] items-center ">
            <div className="card lg:max-w-lg bg-base-100 shadow-xl p-4">
                    <h1 className="text-3xl text-secondary font-bold">SignUp</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Full Name: </span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                }
                            })}
                        />
                        <label className="">
                            {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email: </span>
                        </label>
                        <input
                            type="email"
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "error message", // JS only: <p>error message</p> TS only support string
                                },
                            })}
                        />
                        <label className="">
                            {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password: </span>
                        </label>
                        <input
                            type="password"
                            className="input input-bordered w-full"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                minLength: {
                                    value: 6,
                                    message:
                                        "Please input 6 characters or longer",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>


                    <input type="submit" value="SIGNUP" className="btn text-white w-full"/>
                </form>
                        <div className="py-2 text-sm">
                            Already have an account ? <Link to="/login" className="text-secondary font-bold">Login</Link>
                        </div>
                <div className="divider">OR</div>
                <button className="btn btn-outline" onClick={()=> signInWithGoogle()}>
                    <img src={google} className="w-12 mx-2" alt="icon" />
                    Continue with Google
                    </button>
            </div>
        </div>
    );
};

export default Login;
