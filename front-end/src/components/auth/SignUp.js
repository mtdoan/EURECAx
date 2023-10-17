import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [canvasid, setCanvasId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(global.route + `/api/users`, {
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                isAdmin: isAdmin,
                canvasid: canvasid,
            }, { withCredentials: true });
            localStorage.setItem("User", JSON.stringify(response.data));
            navigate("/", { replace: true });
        } catch (error) {
            console.error(error);
        }
    };

    const signIn = async (e) => {
        navigate("/signIn", { replace: true });
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl font-light leading-9 tracking-tight text-gray-900">
                        CHAOS1
                    </h2>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autocomplete="off"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autocomplete="off"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        
                        <div flex-row>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="firstname"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        autocomplete="off"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="lastname"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        autocomplete="off"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autocomplete="off"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onSubmit={(e) => handleSubmit(e)}
                                onClick={(e) => handleSubmit(e)}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Have an accout?{' '}
                        <a
                            onClick={(e) => signIn(e)}
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}