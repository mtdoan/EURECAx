import './hamburgerMenu.css'



import Choas1Icon from './assets/choas1Icon'
import Choas1IconFull from './assets/choas1__logo--full'
import ConnectIcon from './assets/connectIcon'
import DashboardIcon from './assets/dashboardIcon'
import ResizeMenuButton from './assets/resizeMenuButton'
import DocumentsIcon from './assets/documentsIcon'
import LearnIcon from './assets/learnIcon'


import { useNavigate } from 'react-router-dom'

// import { useNavigate } from "react-router-dom";




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

		
    


	return (
		<>
			<div className="w-1/4 h-full">

				

					<div className="logo__container">
						<figure className="logo__container--holder">
							<Choas1IconFull />
						</figure>
					</div>

					<button className="resizeButton--container" id="expand-button"> 
						<ResizeMenuButton/>
					</button>

				<div className="container">




					<div className="menu__item--container">
							<div className='menu__item'
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
							<div className='menu__item'
							type="button"
							onClick={(e) => openPage(e)}
							>
										<figure className="menu__item--svg-container">
											<ConnectIcon className="menu__item--svg" />
										</figure>

										<p className="menu__item--name">Connect</p>
							</div>
					</div>



				</div>
			</div>

		</>
	)
}

export default HamburgerMenu

