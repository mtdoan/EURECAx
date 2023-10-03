import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "components/Header";
import HamburgerMenu from "./hambugerMenu";
import NavBar from "./NavBar";

export default function Dashboard() {
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("User"));

  useEffect(() => {
    if (user === null) {
      localStorage.removeItem("User");
      navigate("/signIn");
    }
  }, []);

  const logout = async () => {
    try {
      const response = await fetch(global.route + `/api/users/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      localStorage.removeItem("User");
      navigate("/signIn");
    } catch (err) {
      //console.log(err);
    }
  };

  return (
    <>
      <div className="App">
        <div className="flex flex-row w-full">
          <HamburgerMenu />
          <div className="w-full border-l-2 ">
            <div className="[&_nav]:flex [&_nav]:flex-row h-[10vh] flex flex-row items-center w-full justify-center border-b-2">
              <NavBar />
            </div>
            <div className="flex flex-row h-[90vh] z-0">
                <Outlet/>
              {/* <div>
                <button
                  type="signout"
                  onClick={() => logout()}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign out
                </button>
              </div> */}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
