import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google from '../../Assets/Logo/google.png'

const Login = () => {

    //React form hooks
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    //React firebase hooks
    

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="flex justify-center h-[90vh] items-center ">
            <div class="card lg:max-w-lg bg-base-100 shadow-xl p-4">
                    <h1 className="text-3xl text-secondary font-bold">SignUp</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Full Name: </span>
                        </label>
                        <input
                            type="text"
                            class="input input-bordered w-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                }
                            })}
                        />
                        <label class="">
                            {errors.name?.type === "required" && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            
                        </label>
                    </div>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Email: </span>
                        </label>
                        <input
                            type="email"
                            class="input input-bordered w-full"
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
                        <label class="">
                            {errors.email?.type === "required" && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === "pattern" && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Password: </span>
                        </label>
                        <input
                            type="password"
                            class="input input-bordered w-full"
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
                        <label class="label">
                            {errors.password?.type === "required" && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === "minLength" && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>


                    <input type="submit" value="SIGNUP" className="btn text-white w-full"/>
                </form>
                        <div className="py-2 text-sm">
                            Already have an account ? <Link to="/login" className="text-secondary font-bold">Login</Link>
                        </div>
                <div class="divider">OR</div>
                <button class="btn btn-outline">
                    <img src={google} className="w-12 mx-2" alt="icon" />
                    Continue with Google
                    </button>
            </div>
        </div>
    );
};

export default Login;
