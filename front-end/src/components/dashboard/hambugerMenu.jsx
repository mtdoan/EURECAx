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
    const openPage = async (e) => {
		console.log('Works!')
        // navigate("./");
    };
	
    // const openPage = async (e) => {
	// 	if (html elmenet = 'Dashboard'){
	// 		navigate("./");
	// 	}
	// 	if (html elmenet = 'Connect'){
	// 		navigate("./");
	// 	}
	// 	if (html elmenet = 'Learn'){
	// 		navigate("./");
	// 	}
	// 	if (html elmenet = 'Team'){
	// 		navigate("./");
	// }




		
	document.addEventListener("click", function() {
		const resizeButton = document.getElementById("resizeButton");

			
		resizeButton.addEventListener("click", function() {
			const sideBarSize = document.querySelectorAll(".menu");
			const menuItem= document.querySelectorAll(".menu__item");
			const menuItemName = document.querySelectorAll(".menu__item--name");
			const resizeButton = document.querySelectorAll(".resizeButton");


			sideBarSize.forEach(function(element) {
				element.classList.toggle("collapsed__menu");
			});

			  
			menuItem.forEach(function(element) {
			element.classList.toggle("menu__item--after");
			});

			menuItemName.forEach(function(element) {
			element.classList.toggle("menu__item--name--remove");
			  });

			resizeButton.forEach(function(element) {
			element.classList.toggle("resizeButton--after");
			  });

		});
			
		});




	  

	// Get references to the button and the target element



	return (
		<>
			<div  id="menu" className="menu" >

					<div className="logo__container">
						<figure className="logo__container--holder">
							<Choas1IconFull id="logo" className="full__logo" />
						</figure>
						<button id="resizeButton" className="resizeButton--container" > 
							<ResizeMenuButton className="resizeButton" />
						</button>
					</div>


				<div className="container">

					<div className="menu__item--container">
							<div 
							className='menu__item'
							type="button"
							onClick={(e) => openPage(e)}
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
							onClick={(e) => openPage(e)}
							>
										<figure className="menu__item--svg-container">
											<DocumentsIcon className="menu__item--svg" />
										</figure>
										<p className="menu__item--name">Documents</p>
							</div>
					</div>
					<div className="menu__item--container">
							<div 
							className='menu__item'
							type="button"
							onClick={(e) => openPage(e)}
							>
										<figure className="menu__item--svg-container">
											<ConnectIcon className="menu__item--svg" />
										</figure>
										<p className="menu__item--name">Connect</p>
							</div>
					</div>
					<div className="menu__item--container">
							<div 
							className='menu__item'
							type="button"
							onClick={(e) => openPage(e)}
							>
										<figure className="menu__item--svg-container">
											<LearnIcon className="menu__item--svg" />
										</figure>
										<p className="menu__item--name">Learn</p>
							</div>
					</div>
 




				</div>
			</div>

		</>
	)
}



export default HamburgerMenu

