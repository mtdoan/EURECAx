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
import ResizeMenuButton from "./assets/resizeMenuButton";
import DocumentsIcon from "./assets/documentsIcon";
import LearnIcon from "./assets/learnIcon";

import DashboardBigIcon from "./assets/dashboardIconBig";
import ConnectBigIcon from "./assets/connectIconBig";
import DocumentsBigIcon from "./assets/documentsIconBig";

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

  // For Loop Version - testing

  // document.addEventListener("click", function() {
  //   const resizeButton = document.getElementById("resizeButton");
  //   resizeButton.addEventListener("click", function() {
  //     const sideBarSize = document.querySelectorAll(".menu");
  //     const menuItem = document.querySelectorAll(".menu__item");
  //     const menuItemName = document.querySelectorAll(".menu__item--name");
  //     const resizeButton = document.querySelectorAll(".resizeButton");

  //     const toggleClasses = function(elements, className) {
  //       for (let i = 0; i < elements.length; i++) {
  //         elements[i].classList.toggle(className);
  //       }
  //     };

  //     toggleClasses(sideBarSize, "collapsed__menu");
  //     toggleClasses(menuItem, "menu__item--after");
  //     toggleClasses(menuItemName, "menu__item--name--remove");
  //     toggleClasses(resizeButton, "resizeButton--after");
  //   });
  // });

  // document.addEventListener("click", function() {
  // 	const resizeButton = document.getElementById("resizeButton");
  // 	resizeButton.addEventListener("click", function() {

  // 		const sideBarSize = document.querySelectorAll(".menu");
  // 		sideBarSize.forEach(function(element) {
  // 			element.classList.toggle("collapsed__menu");
  // 		});

  // 		const menuItem= document.querySelectorAll(".menu__item");
  // 		menuItem.forEach(function(element) {
  // 			element.classList.toggle("menu__item--after");
  // 		});

  // 		const menuItemName = document.querySelectorAll(".menu__item--name");
  // 		menuItemName.forEach(function(element) {
  // 			element.classList.toggle("menu__item--name--remove");
  // 		});

  // 		const resizeButton = document.querySelectorAll(".resizeButton");
  // 		resizeButton.forEach(function(element) {
  // 		element.classList.toggle("resizeButton--after");
  // 		  });

  // 	});

  // });

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
            <ResizeMenuButton className="resizeButton" />
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
                {expanded ? (
                  <DashboardIcon className="menu__item--svg" />
                ) : (
                  <DashboardBigIcon />
                )}
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
                {expanded ? (
                  <ConnectIcon className="menu__item--svg" />
                ) : (
                  <ConnectBigIcon />
                )}
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
                  {expanded ? (
                    <DocumentsIcon className="menu__item--svg" />
                  ) : (
                    <DocumentsBigIcon />
                  )}
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
