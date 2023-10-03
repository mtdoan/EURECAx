import './hamburgerMenu.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'


//Assets 
import Choas1Icon from './assets/choas1Icon'
import Choas1IconFull from './assets/choas1__logo--full'
import ConnectIcon from './assets/connectIcon'
import DashboardIcon from './assets/dashboardIcon'
import ResizeMenuButton from './assets/resizeMenuButton'
import DocumentsIcon from './assets/documentsIcon'
import LearnIcon from './assets/learnIcon'




const HamburgerMenu = () => {

	const [showFullLogo, setShowFullLogo] = useState(true); // State variable to track the logo icon

	const resizeMenu = () => {
	  setShowFullLogo(!showFullLogo); // Toggle between full and short logo
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
	}


	return (
		<>
			<div  id="menu" className="menu" >

					<div className="containers">
						<div className="logo__container">
							{showFullLogo ? <Choas1IconFull id="logo" /> : <Choas1Icon />}
						</div>

			
							<button id="resizeButton" onClick={resizeMenu}> 
								<ResizeMenuButton className="resizeButton" />
							</button>
					</div>


				<div className="container">
					<Link to="/dashboard/new-project">
						<div className="menu__item--container">
								<div 
								className='menu__item'
								type="button"
								>
											<figure className="menu__item--svg-container">
												<DashboardIcon className="menu__item--svg" />
											</figure>
											<div className="menu__item--name-container">
												<p className="menu__item--name">Dashboard</p>
											</div>
								</div>
						</div>
					</Link>
					<Link to="/dashboard/new-project">
						<div className="menu__item--container">
								<div 
								className='menu__item'
								type="button"
								>
											<figure className="menu__item--svg-container">
												<DocumentsIcon className="menu__item--svg" />
											</figure>
											<div className="menu__item--name-container">
												<p className="menu__item--name">Documents</p>
											</div>
								</div>
						</div>
					</Link>
					<Link to="/dashboard/new-project">
						<div className="menu__item--container">
								<div 
								className='menu__item'
								type="button"
								>
											<figure className="menu__item--svg-container">
												<ConnectIcon className="menu__item--svg" />
											</figure>
											<div className="menu__item--name-container">
												<p className="menu__item--name">Connect</p>
											</div>
								</div>
						</div>
					</Link>
					<Link to="/dashboard/new-project">
						<div className="menu__item--container">
								<div 
								className='menu__item'
								type="button"
								>
											<figure className="menu__item--svg-container">
												<LearnIcon className="menu__item--svg" />
											</figure>
											<div className="menu__item--name-container">
												<p className="menu__item--name">Learn</p>
											</div>
								</div>
						</div>
					</Link>

				</div>  
				{/* ^^^^this is container Div */}

			</div>

		</>
	)
}



export default HamburgerMenu

