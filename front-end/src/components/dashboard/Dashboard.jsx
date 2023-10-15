import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "components/Header";

import HamburgerMenu from "./hambugerMenu";
import NavBar from "./NavBar";
import Canvas from "./canvas/Canvas";

export default function Dashboard() {
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("User"));

  useEffect(() => {
    if (user === null) {
      localStorage.removeItem("User");
      navigate("/signIn");
    }
  }, []);

  return (
    <>
      <div className="App">
        <div className="flex flex-row w-full">
          <HamburgerMenu />
          <div className="w-full border-l-2 ">
            <div className="[&_nav]:flex flex flex-row items-center w-full justify-center border-b-2">
              <NavBar />
            </div>
            <div className="flex flex-row h-[90vh] z-0">
                {/* <Outlet/> */}
              <Canvas/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
