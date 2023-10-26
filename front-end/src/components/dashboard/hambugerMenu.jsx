import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/hamburgerMenu.css";

//Assets
import Choas1Icon from "./assets/choas1Icon";
import Choas1IconFull from "./assets/choas1__logo--full";
import ConnectIcon from "./assets/connectIcon";
import DashboardIcon from "./assets/dashboardIcon";
import DocumentsIcon from "./assets/documentsIcon";
import LearnIcon from "./assets/learnIcon";

import ResizeButton from "./assets/resizeButton";

const HamburgerMenu = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeButton, setActiveButton] = useState(1);

  const toggleSidebar = () => {
    setExpanded(!expanded);
    const resizeButton = document.getElementById("resizeButton");
    resizeButton.classList.toggle("rotated");
  };

  const handleButtonClick = (index) => {

    if (activeButton !== null) {
      const prevButton = document.getElementById(`menu-item-${activeButton}`);
      prevButton.style.backgroundColor = "";
    } //this reset previous button if clicked

    // Change the background color of the clicked button
    const currentButton = document.getElementById(`menu-item-${index}`);
    currentButton.style.backgroundColor =
      currentButton.style.backgroundColor === "" ? "rgba(28, 28, 28, 0.1)" : "";
      currentButton.style.borderRadius = "8px";
    //this change current  button background if clicked

    setActiveButton(index);
  };
  useEffect(() => {
    handleButtonClick(1);
  }, []);

  return (
    <>
      <div id="menu" className={`menu ${expanded ? 'active' : 'collapsed'}`}>
        <div className={`logo__container ${expanded ? 'opened' : 'closed'}`}>
          <figure className="logo__container--holder">
            {expanded ? (
              <Choas1IconFull id="logo" />
            ) : (
              <Choas1Icon />
            )}
          </figure>

          <button
            className={`resizeButton ${expanded ? 'opened' : 'closed'} rotateButton`}
            onClick={toggleSidebar}>
            <ResizeButton id="resizeButton" className="rotateButton" ></ResizeButton>
          </button>

        </div>

        <div className="container">
          <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="">
              <button
                id="menu-item-1"
                className={`menu__item ${expanded ? 'opened' : 'closed'}`}
                type="button"
                onClick={() => handleButtonClick(1)}
              >
                <div className={`selected-bar${activeButton === 1 ? '-opened' : ''}`}/>
                <div className="menu__item--svg-container">
                  <DashboardIcon className="menu__item--svg" />
                </div>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Dashboard</p>
              </button>
            </Link>
          </div>

          <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="">
              <button
                id="menu-item-2"
                className={`menu__item ${expanded ? 'opened' : 'closed'}`}
                type="button"
                onClick={() => handleButtonClick(2)}
              >
                <div className={`selected-bar${activeButton === 2 ? '-opened' : ''}`} />
                <div className="menu__item--svg-container">
                  <DocumentsIcon className="menu__item--svg" />
                </div>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Documents</p>
              </button>
            </Link>
          </div>

          <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="">
              <button
                id="menu-item-3"
                className={`menu__item ${expanded ? 'opened' : 'closed'}`}
                type="button"
                onClick={() => handleButtonClick(3)}
              >
                <div className={`selected-bar${activeButton === 3 ? '-opened' : ''}`} />
                <div className="menu__item--svg-container">
                  <ConnectIcon className="menu__item--svg" />
                </div>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Connect</p>
              </button>
            </Link>
          </div>

          <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="">
              <button
                id="menu-item-4"
                className={`menu__item ${expanded ? 'opened' : 'closed'}`}
                type="button"
                onClick={() => handleButtonClick(4)}
              >
                <div className={`selected-bar${activeButton === 4 ? '-opened' : ''}`} />
                <div className="menu__item--svg-container">
                  <LearnIcon className="menu__item--svg" />
                </div>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Learn</p>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;