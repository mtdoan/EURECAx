import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import LoadingCircle from "components/shared/LoadingCircle";
import { Tooltip } from "components/shared";
import { inputPatterns } from "util/validation";


export default function SignIn() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [canvasid, setCanvasId] = useState("");
  const [bio, setBio] = useState("Hi, I am a new user.");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        global.route + `/api/users`,
        {
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          isAdmin: isAdmin,
          canvasid: canvasid,
          bio: bio,
        },
        { withCredentials: true },
      );
      localStorage.setItem("User", JSON.stringify(response.data));
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const signIn = async (e) => {
    navigate("/signIn", { replace: true });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {isLoading ? <LoadingCircle /> : ""}
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
          <form
            className="space-y-6 [&_input]:pl-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium leading-6 text-gray-900 flex flex-row gap-1 items-center"
              >
                Email address
                <Tooltip
                  tip={
                    <div className="w-60">
                      Please enter your email address in the format
                      example@example.com.
                    </div>
                  }
                />
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
                  pattern={inputPatterns.email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="username"
                  className="text-sm font-medium leading-6 text-gray-900 flex flex-row gap-1 items-center"
                >
                  Username
                  <Tooltip
                    tip={
                      <div className="w-64">
                        Please enter a unique username that is:
                        <ul className="list-disc list-inside font-normal">
                          <li>At least 6 characters long.</li>
                          <li>
                            Contains only letters or numbers (no spaces or
                            symbols)
                          </li>
                        </ul>
                      </div>
                    }
                  />
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                  required
                  minLength={6}
                  pattern={inputPatterns.username}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="firstname"
                  className="text-sm font-medium leading-6 text-gray-900 flex flex-row gap-1 items-center"
                >
                  First name
                  <Tooltip
                    tip={
                      <div className="w-60">Please enter your first name.</div>
                    }
                  />
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  autoComplete="off"
                  required
                  pattern={inputPatterns.firstname}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="lastname"
                  className="text-sm font-medium leading-6 text-gray-900 flex flex-row gap-1 items-center"
                >
                  Last name
                  <Tooltip
                    tip={
                      <div className="w-60">Please enter your last name.</div>
                    }
                  />
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  autoComplete="off"
                  required
                  pattern={inputPatterns.lastname}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-6 text-gray-900 flex flex-row gap-1 items-center"
                >
                  Password
                  <Tooltip
                    tip={
                      <div className="w-60">
                        Please enter a password that is at least 8 characters
                        long and contains at least:
                        <ul className="list-disc list-inside font-normal">
                          <li>One uppercase letter</li>
                          <li>One lowercase letter</li>
                          <li>One number</li>
                          <li>One special character</li>
                        </ul>
                      </div>
                    }
                  />
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  pattern={inputPatterns.password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{" "}
            <a
              onClick={(e) => signIn(e)}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
