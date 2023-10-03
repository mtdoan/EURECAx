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
    
    let menuItemNames = ["Dashboard", "Connect", "Learn", "Documents"]; // Names of every menu item
    const menuItemName = document.getElementsByClassName("menu__item--name");
  }

  const openPage = async () => {
    const menuItemName = document.getElementsByClassName("menu__item--name");
    let menuItemNames = ["Dashboard", "Connect", "Learn", "Documents"]; // Names of every menu item

    for (let i = 0; i < menuItemNames.length; i++) {
      if (menuItemName[0].innerHTML == menuItemNames[i]) {
        console.log("Button Works!");
        navigate("./");
      }
    }
  };

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

          <button className={`resizeButton ${expanded ? 'opened' : 'closed'}`} onClick={toggleSidebar}>
                <ResizeButton>
                </ResizeButton>
              </button>
        </div>

        <div className="container">
          <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <div
              className={`menu__item ${expanded ? 'opened' : 'closed'}`}
              type="button"
              onClick={() => openPage()}
            >
              <figure className="menu__item--svg-container">
                <DashboardIcon className="menu__item--svg" />
              </figure>
              <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>
                Dashboard
              </p>
            </div>
          </div>
          <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <div
              className={`menu__item ${expanded ? 'opened' : 'closed'}`}
              type="button"
              onClick={() => openPage()}
            >
              <figure className="menu__item--svg-container">
                <ConnectIcon className="menu__item--svg" />
              </figure>
              <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>Connect</p>
            </div>
          </div>
          <div className={`menu__item--container ${expanded ? 'opened' : 'closed'}`}>
            <Link to="/dashboard/new-project">
              <div 
                className={`menu__item ${expanded ? 'opened' : 'closed'}`} 
                type="button">
                <figure className="menu__item--svg-container">
                  <DocumentsIcon className="menu__item--svg" />
                </figure>
                <p className={`menu__item--name ${expanded ? 'opened' : 'closed'}`}>New Project</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
