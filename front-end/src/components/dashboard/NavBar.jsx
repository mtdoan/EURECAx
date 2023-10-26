import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// style
import "./style/navbar.css";
import "./style/profiledropdown.css";
import "./style/dialogs.css";
import "../shared/loading-circle.css";

// assets
import SearchIcon from "./icons/searchIcon";
import CommandIcon from "./icons/commandIcon";
import ExecuteIcon from "./icons/executeIcon";
import LoadingCircle from "components/shared/LoadingCircle";

import LogOut from "./icons/logOut";
import Profile from "./icons/profile";

const NavBar = () => {
    let navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("User"));

    const [isLoading, setIsLoading] = useState(false);
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
    });

    function ProfileButton() {
        return (
            <li className='dropdownItem' onClick={() => goProfile()}>
                <div className='child2'>
                    <Profile />
                </div>
                <span className='child2'> Profile</span>
            </li>
        )
    }

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
        setIsLoading(true);
        try {
            const response = await fetch(global.route + `/api/users/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            localStorage.removeItem("Canvas");
            localStorage.removeItem("User");
            navigate("/signIn");
        } catch (err) {
            //console.log(err);
        }
        setIsLoading(false);
    };

    const goProfile = async () => {
        navigate("profile");
    }

    const handleSubmit = async () => {
        navigate("/new-project");
    }

    return (
        <>
            <div className="navbar-container">
                {isLoading ? <LoadingCircle /> : ""}
                <form className="searchbar">
                    <div className="icon">
                        <SearchIcon />
                    </div>
                    <input className="search-input" placeholder="Search">

                    </input>
                    <button style={{ "marginLeft": "8px" }}>
                        <CommandIcon />
                    </button>
                </form>

                <div className="execute-container">
                    <button className="execute-button" onClick={() => {handleSubmit()}}>
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
                        {user.firstname.charAt(0)}{user.lastname.charAt(0)}{" "}
                    </div>

                    <h4 className="profile-name"> {user.firstname} </h4>

                    <div className={`dropdown-menu ${dropdownStatus ? 'active' : 'inactive'}`}>
                        <ProfileButton/>
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
