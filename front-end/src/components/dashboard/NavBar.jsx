import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// style
import "./style/navbar.css";
import "./style/profiledropdown.css";

// assets
import SearchIcon from "./icons/searchIcon"
import CommandIcon from "./icons/commandIcon"
import ExecuteIcon from "./icons/executeIcon"

import LogOut from "./icons/logOut"

const NavBar = () => {
    let navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("User"));

    const [dropdownStatus, setDropdownStatus] = useState(false);
    let menuref = useRef();
    
    useEffect(() => {
        let handler = (e) => {
            if (!menuref.current.contains(e.target)) {
                setDropdownStatus(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    function LogoutButton() {
        return (
            <li className='dropdownItem' onClick={() => logout()}>
                <div className='child'>
                    <LogOut />
                </div>
                <a className='child'> Log out</a>
            </li>
        )
    }

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
            <div className="navbar-container">
                <form className="searchbar">
                    <div class="icon">
                        <SearchIcon />
                    </div>
                    <input className="search-input" placeholder="Search">

                    </input>
                    <button style={{ "marginLeft": "8px" }}>
                        <CommandIcon />
                    </button>
                </form>

                <div className="execute-container">
                    <button className="execute-button">
                        <div className="execute-inner">
                            <div className="execute-icon">
                                <ExecuteIcon />
                            </div>
                            <div className="execute-text">
                                Execute with AI
                            </div>
                        </div>
                    </button>
                </div>

                <div className="profile-menu" ref={menuref} onClick={() => { setDropdownStatus(!dropdownStatus) }}>
                    <div className="profile-in">
                        DA
                    </div>

                    <h4 className="profile-name"> Daniel </h4>

                    <div className={`dropdown-menu ${dropdownStatus ? 'active' : 'inactive'}`}>
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
