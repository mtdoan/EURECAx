import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackIcon from "./icons/backIcon";

//Style
import "./style/profilecard.css";

//Assets


const ProfileCard = () => {
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("User"));

    return (
        <div>
            <div className="profile-container">
                <div className="profile-pic">
                    {user.firstname.charAt(0)}{user.lastname.charAt(0)}{" "}
                </div>
                <div>
                    <h1>{user.firstname} {user.lastname}</h1>
                    <caption>{user.email}</caption>
                    <p>{user.bio!=null ? user.bio : "No info."}</p>
                </div>
                <div className="back-button" onClick={()=> navigate("/")} >
                <BackIcon />
              </div>
            </div>
        </div>
    );
}

export default ProfileCard;