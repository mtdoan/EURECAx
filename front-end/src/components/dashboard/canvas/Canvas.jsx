import React, { useState, useEffect, useRef, Component } from "react";
import { useNavigate } from "react-router-dom";

// style
import "../style/canvas.css";
import "../style/modal.css";

// assets
import CanvasItem from "./CanvasItem";
import CanvasItem2 from "./CanvasItem2";
import MVI from "./MVI";
import CanvasItemWide from "./CanvasItemWide";
import KeyTimings from "./KeyTimings";

import ChaosBadge from "../assets/square.png";

const Canvas = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [savedTime, setSavedTime] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    const divStyle = { display: isModalOpen ? 'block' : 'none' }

    const getCurrentDate = () => {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleSave = () => {
        // Get the current time and update the state
        const now = new Date();
        const hours = now.getHours();
        const amPm = hours >= 12 ? "PM" : "AM";
        const twelveHourFormatHours = hours % 12 || 12;

        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const currentTime = `${twelveHourFormatHours}:${minutes}:${seconds}${amPm}`;

        setSavedTime(currentTime);
        setIsSaved(true);
    };

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = (data) => {
        setIsModalOpen(false);
    }

    return (
        <>
            {/* CANVAS */}

            <div className="canvas-container">
                {/* ROW 1 */}
                <div className="grid-row">
                    <CanvasItem onClick={openModal} title={"EVENT"} text={"How might we build a dashboard and local LLM that supports problem solving for planning and prototyping for Defence and their partners in order to accelerate outcomes."} />
                    <CanvasItem onClick={openModal} title={"UNDERSTAND"} text={"The solution will have two main components. A dashboard and a learning language model. Other components include a database and an API."} />
                    <CanvasItem onClick={openModal} title={"REFINE"} text={"Dashboard login /registration, navigation menu, canvas, profile settings LLM local LLM selection, hosting requirements, training requirements, additional data requirements..."} />
                    <CanvasItem onClick={openModal} title={"EXPLORE"} text={"Dashboard login /registration, navigation menu, canvas, profile settings LLM local LLM selection, hosting requirements, training requirements, additional data requirements..."} />
                    <CanvasItem onClick={openModal} title={"CREATE"} text={"Dashboard login /registration, navigation menu, canvas, profile settings LLM local LLM selection, hosting requirements, training requirements, additional data requirements..."} />
                    <CanvasItem onClick={openModal} title={"ACTION"} text={"MVP, Action Plan, SOP, Transfer Plan, Engagement Plan, Return to Model, Action Statement: By October, we would have created an MVP for Defence and their partners that provid..."} />
                </div>

                {/* ROW 2 */}
                <div className="grid-row">
                    <CanvasItem title={"INNOVATION WNGO"} text={""} />

                    <div className="grid-inner">
                        <div className="grid-inner-row">
                            <CanvasItem2 title={"Feasibility"} text={""} />
                            <CanvasItem2 title={"Viability"} text={""} />
                            <CanvasItem2 title={"Desirability"} text={""} />
                            <MVI title={"MINIMUM VIABLE IDEA"} text={""} />
                            <CanvasItem2 title={"Learn"} text={""} />
                            <CanvasItem2 title={"Build"} text={""} />
                            <CanvasItem2 title={"Measure"} text={""} />
                        </div>

                        <div className="grid-inner-row-2">
                            <CanvasItemWide title={"VISION"} text={""} />
                            <CanvasItemWide title={"IMPACT"} text={""} />
                        </div>

                        <KeyTimings />
                    </div>

                    <CanvasItem title={"INNOVATION OGRP"} text={""} />
                </div>
            </div>


            {/* CUSTOM MODAL */}

            <div className="backdrop" style={divStyle}>
                <div className="modal-container">
                    <div className="modal-header">
                        <text className="header-text">
                            Last edited {savedTime} {getCurrentDate()}
                        </text>

                        <div style={{ "marginLeft": "auto", "marginRight": "0" }}>
                            <button className="save-button" onClick={handleSave}>
                                Save
                            </button>
                            <button className="discard-button" onClick={closeModal}>
                                Discard
                            </button>
                            <button className="options-button">
                                •••
                            </button>
                        </div>
                    </div>

                    <div className="modal-scroll-box">
                        <div className="modal-scroll-box__wrapper">
                            <div className="modal-scroll-box__container" role="list">
                                <div style={{ "display": "flex", "marginTop": "43px", "marginLeft": "-36px" }}>
                                    <img src={ChaosBadge} width={"26px"} height={"26px"} />
                                    <text className="modal-title">EVENT</text>
                                </div>

                                <text className="modal-text" spellcheck="false">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Canvas;