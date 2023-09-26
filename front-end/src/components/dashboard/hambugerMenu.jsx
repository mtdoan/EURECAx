import './hamburgerMenu.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

//Assets 
import Choas1Icon from './assets/choas1Icon'
import Choas1IconFull from './assets/choas1__logo--full'
import ConnectIcon from './assets/connectIcon'
import DashboardIcon from './assets/dashboardIcon'
import ResizeMenuButton from './assets/resizeMenuButton'
import DocumentsIcon from './assets/documentsIcon'
import LearnIcon from './assets/learnIcon'




const HamburgerMenu = () => {
	let navigate = useNavigate()

	const [showFullLogo, setShowFullLogo] = useState(true); // State variable to track the logo icon

	const toggleLogo = () => {
	  setShowFullLogo(!showFullLogo); // Toggle between full and short logo
	}


		const openPage = async () => {

			const menuItemName = document.getElementsByClassName("menu__item--name");
			let menuItemNames = ['Dashboard', 'Connect', 'Learn', 'Documents' ] // Names of every menu item

			for (let i = 0; i < menuItemNames.length; i++){
				if ( menuItemName[0].innerHTML == menuItemNames[i]){
						console.log('Button Works!')
						navigate("./");
				}
			}
	}


	// For Loop Version - testing

	document.addEventListener("click", function () {
		const resizeButton = document.getElementById("resizeButton");
		resizeButton.addEventListener("click", function () {



		  const sideBarSize = document.querySelectorAll(".menu");
		  const menuItem = document.querySelectorAll(".menu__item");
		  const menuItemName = document.querySelectorAll(".menu__item--name");
		  const resizeButton = document.querySelectorAll(".resizeButton");
	  
		  const toggleClasses = function (elements, className) {
			for (let i = 0; i < elements.length; i++) {
			  elements[i].classList.toggle(className);
			}
		  };
	  
		  toggleClasses(sideBarSize, "collapsed__menu");
		  toggleClasses(menuItem, "menu__item--after");
		  toggleClasses(menuItemName, "menu__item--name--remove");
		  toggleClasses(resizeButton, "resizeButton--after");
		});
	  });
	  

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
			<div  id="menu" className="menu" >

					<div className="logo__container">
						<figure className="logo__container--holder">
							{showFullLogo ? <Choas1IconFull id="logo" className="full__logo" /> : <Choas1Icon />}
						</figure>

						<div className="resizeButton--container">

							<button id="resizeButton" onClick={toggleLogo}> 
								<ResizeMenuButton className="resizeButton" />
							</button>
						</div>
					</div>


				<div className="container">

					<div className="menu__item--container">
							<div 
							className='menu__item'
							type="button"
							onClick={() => openPage()}
							>
										<figure className="menu__item--svg-container">
											<DashboardIcon className="menu__item--svg" />
										</figure>
										<p className="menu__item--name">Dashboard</p>
							</div>
					</div>
					<div className="menu__item--container">
							<div 
							className='menu__item'
							type="button"
							onClick={() => openPage()}
							>
										<figure className="menu__item--svg-container">
											<DashboardIcon className="menu__item--svg" />
										</figure>
										<p className="menu__item--name">Connect</p>
							</div>
					</div>
					


				</div>  
				{/* ^^^^this is container Div */}

			</div>

		</>
	)
}



export default HamburgerMenu

