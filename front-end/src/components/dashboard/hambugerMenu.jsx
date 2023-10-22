import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// style
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
  let navigate = useNavigate();

  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
    const resizeButton = document.getElementById("resizeButton");

    // Toggle the 'rotated' class to trigger the rotation animation
    resizeButton.classList.toggle("rotated");
  }


  return (
    <>
      <div id="menu" className={`menu ${expanded ? 'active' : 'collapsed'}`}>
        <div className={`logo__container ${expanded ? 'opened' : 'closed'}`}>
          <figure className="logo__container--holder">
            {expanded ? (
              <Choas1IconFull id="logo"/>
            ) : (
              <Choas1Icon />
            )}
          </figure>

          <button
            
            className={`resizeButton ${expanded ? 'opened' : 'closed'} rotateButton`}
            onClick={toggleSidebar}
            >
              <ResizeButton id="resizeButton" className="rotateButton" ></ResizeButton>
          </button>

        </div>

        <div className="container">
          
        <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="">
              <div 
                className={`menu__item ${expanded ? 'opened' : 'closed'}`} 
                type="button">
                <div className="menu__item--svg-container">
                  <DashboardIcon className="menu__item--svg" />
                </div>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Dashboard</p>
              </div>
            </Link>
          </div>

        <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="">
              <div 
                className={`menu__item ${expanded ? 'opened' : 'closed'}`} 
                type="button">
                <div className="menu__item--svg-container">
                  <DocumentsIcon className="menu__item--svg" />
                </div>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Documents</p>
              </div>
            </Link>
          </div>

        <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="">
              <div 
                className={`menu__item ${expanded ? 'opened' : 'closed'}`} 
                type="button">
                <div className="menu__item--svg-container">
                  <ConnectIcon className="menu__item--svg" />
                </div>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Connect</p>
              </div>
            </Link>
          </div>

        <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="">
              <div 
                className={`menu__item ${expanded ? 'opened' : 'closed'}`} 
                type="button">
                <div className="menu__item--svg-container">
                  <LearnIcon className="menu__item--svg" />
                </div>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Learn</p>
              </div>
            </Link>
          </div>




        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
