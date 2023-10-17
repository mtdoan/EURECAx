import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// style
import "./style/navbar.css";
import "./style/profiledropdown.css";
import "./style/dialogs.css";

// assets
import SearchIcon from "./icons/searchIcon"
import CommandIcon from "./icons/commandIcon"
import ExecuteIcon from "./icons/executeIcon"

import LogOut from "./icons/logOut"

const NavBar = () => {
    let navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("User"));
    const [canvas, setCanvas] = useState("");

    const [dropdownStatus, setDropdownStatus] = useState(false);
    let menuref = useRef();
    
    // useEffect(() => {
    //     if (localStorage.getItem("Canvas") !== null) {
    //         // if (JSON.parse(localStorage.getItem("Canvas"))) {
    //         //     setCanvas(JSON.parse(localStorage.getItem("Canvas")));
    //         // }
    //     }
    // });

    useEffect(() => {
        localStorage.setItem("Canvas", JSON.stringify(canvas))
    }, [canvas])

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
            localStorage.removeItem("Canvas");
            localStorage.removeItem("User");
            navigate("/signIn");
        } catch (err) {
            //console.log(err);
        }
    };

    const openDialog = async () => {
        if (document.getElementsByClassName("warning-backdrop")) {
            document.getElementsByClassName("warning-backdrop")[0].style.display = "block";
        }
    }

    const closeDialog = async () => {
        if (document.getElementsByClassName("warning-backdrop")) {
            document.getElementsByClassName("warning-backdrop")[0].style.display = "none";
        }
    }

    const checkCanvasExists = async () => {
        if (user.canvasid == null || user.canvasid == "") {
            alert("New canvas created");
            registerCanvas();
        } else {
            openDialog();
        }
    }
    
    const registerCanvas = async () => {
        try {
            const response = await axios.post(global.route + `/api/canvases`, {
                userid: user._id,
                eventData: "event",
                understandData: "understand",
                refineData: "refine",
                exploreData: "explore",
                createData: "create",
                actionData: "action",
            }, { withCredentials: true });
            setCanvas(response.data);

            const response2 = await axios.put(global.route + `/api/users/profile`, {
                canvasid: response.data._id,
            }, {withCredentials: true})
            localStorage.setItem("User", JSON.stringify(response2.data));
        } catch (error) {
            console.error(error);
        }
    };

    const overwriteCanvas = async () => {
        try {

            closeDialog();

            // delete doesnt work yet
            // await axios.delete(global.route + `/api/canvases/${user.canvasid}`, { withCredentials: true });

            const response2 = await axios.put(global.route + `/api/users/profile`, {
                canvasid: "",
            }, { withCredentials: true });
            localStorage.setItem("User", JSON.stringify(response2.data));

            registerCanvas();
        } catch (error) {
            console.error(error)
        }
    }

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
                    <button className="execute-button" onClick={() => {checkCanvasExists()}}>
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
                        <LogoutButton />
                    </div>
                </div>
            </div>

            <div className="warning-backdrop">
                <div className="warning-container">
                    <text className="warning-heading">
                        Warning
                    </text>
                    <text className="warning-subheading">
                        Are you sure you want to create a new canvas?
                    </text>
                    <text className="warning-description">
                        This will overwrite your current data.
                    </text>

                    <div className="warning-action">
                        <button className="cancel-button" onClick={()=>closeDialog()}>
                            Cancel
                        </button>
                        <button className="continue-button" onClick={()=>overwriteCanvas()}> 
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
