import React, { useState, useEffect, useRef, Component } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
import backdrop from "../assets/diamondsbackdrop.png";

import LoadingCircle from "components/shared/LoadingCircle";

const Canvas = () => {
    const user = JSON.parse(localStorage.getItem("User"));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [savedTime, setSavedTime] = useState("");
    const [savedDate, setSavedDate] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const divStyle = { display: isModalOpen ? 'block' : 'none' }

    const [modalName, setModalName] = useState("");
    const [modalData, setModalData] = useState("");

    const [eventData, setEventData] = useState("");
    const [understandData, setUnderstandData] = useState("");
    const [refineData, setRefineData] = useState("");
    const [exploreData, setExploreData] = useState("");
    const [createData, setCreateData] = useState("");
    const [actionData, setActionData] = useState("");

    const loadCanvas = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(global.route + `/api/canvases/${user.canvasid}`, { withCredentials: true });
            localStorage.setItem("Canvas", JSON.stringify(response.data));
            setCanvasData();
        } catch (error) {
            console.warn(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadCanvas();
    }, []);

    const handleSave = async () => {
        // Get the current time and update the state
        const now = new Date();
        const hours = now.getHours();
        const amPm = hours >= 12 ? "PM" : "AM";
        const twelveHourFormatHours = hours % 12 || 12;

        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const currentTime = `${twelveHourFormatHours}:${minutes}:${seconds}${amPm}`;

        // Get the current date and update the state
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const currentDate = `${day}/${month}/${year}`;

        setSavedTime(currentTime);
        setSavedDate(currentDate);

        let updatedEvent = eventData;
        let updatedUnderstand = understandData;
        let updatedRefine = refineData;
        let updatedExplore = exploreData;
        let updatedCreate = createData;
        let updatedAction = actionData;

        if (modalName == "EVENT") {
            updatedEvent = modalData;
        } else if (modalName == "UNDERSTAND") {
            updatedUnderstand = modalData;
        } else if (modalName == "REFINE") {
            updatedRefine = modalData;
        } else if (modalName == "EXPLORE") {
            updatedExplore = modalData;
        } else if (modalName == "CREATE") {
            updatedCreate = modalData;
        } else if (modalName == "ACTION") {
            updatedAction = modalData;
        }

        setIsLoading(true);
        try {
            const response = await axios.put(global.route + `/api/canvases/info`, {
                canvasId: user.canvasid,
                eventData: updatedEvent,
                understandData: updatedUnderstand,
                refineData: updatedRefine,
                exploreData: updatedExplore,
                createData: updatedCreate,
                actionData: updatedAction,
            }, { withCredentials: true });
            localStorage.setItem("Canvas", JSON.stringify(response.data));
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
        closeModal();
        window.location.reload(false);
    };

    const setCanvasData = async (title) => {
        if (title)
            setModalName(title);
        
        try {
            if (localStorage.getItem("Canvas") !== null) {
                const canvas = JSON.parse(localStorage.getItem("Canvas"));
                setEventData(canvas.eventData)
                setUnderstandData(canvas.understandData)
                setRefineData(canvas.refineData)
                setExploreData(canvas.exploreData)
                setCreateData(canvas.createData)
                setActionData(canvas.actionData)
            }

            if (title == "EVENT") {
                setModalData(eventData)
            } else if (title == "UNDERSTAND") {
                setModalData(understandData)
            } else if (title == "REFINE") {
                setModalData(refineData)
            } else if (title == "EXPLORE") {
                setModalData(exploreData)
            } else if (title == "CREATE") {
                setModalData(createData)
            } else if (title == "ACTION") {
                setModalData(actionData)
            }
        } catch {
            console.error("Canvas not found")
        }
    }

    const openModal = (title) => {
        setCanvasData(title);
        setIsModalOpen(true);
        // document.body.style.overflow = 'hidden';
    }

    const closeModal = (data) => {
        setIsModalOpen(false);
        // document.body.style.overflow = 'unset';
    }

    const updateModal = (e) => {
        setModalData(e.target.value);
    }

    document.body.style.overflow = 'hidden';

    return (
        <>
            <div className="canvas-container">
                {isLoading ? <LoadingCircle /> : ""}
                <div style={{"display":"flex", "justifyContent":"center", "zIndex":"-10"}}>
                    <img src={backdrop} alt="Logo" className="diamonds" />
                </div>

                {/* ROW 1 */}
                <div className="grid-row">
                    <CanvasItem onClick={() => openModal("EVENT")} title={"EVENT"} text={eventData} />
                    <CanvasItem onClick={() => openModal("UNDERSTAND")} title={"UNDERSTAND"} text={understandData} />
                    <CanvasItem onClick={() => openModal("REFINE")} title={"REFINE"} text={refineData} />
                    <CanvasItem onClick={() => openModal("EXPLORE")} title={"EXPLORE"} text={exploreData} />
                    <CanvasItem onClick={() => openModal("CREATE")} title={"CREATE"} text={createData} />
                    <CanvasItem onClick={() => openModal("ACTION")} title={"ACTION"} text={actionData} />
                </div>

                {/* ROW 2 */}
                <div className="grid-row">
                    <CanvasItem title={"Backlog"} text={""} />

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

                    <CanvasItem title={"Deliverables"} text={""} />
                </div>
            </div>


            {/* CUSTOM MODAL */}

            <div className="backdrop" style={divStyle}>
                <div className="modal-container">
                    <div className="modal-header">
                        <text className="header-text">
                            Last edited {savedTime} {savedDate}
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
                                    <text className="modal-title">{modalName}</text>
                                </div>

                                <textarea className="modal-textbox" spellCheck="false" defaultValue={modalData} onChange={updateModal}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Canvas;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.