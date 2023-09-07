import './App.css';
import Header from 'components/Header/Header';
import HamburgerMenu from 'components/HamburgerMenu';


function App() {
	return (
		<div className="App">
			<Header />
			<div className="flex flex-row h-[90vh] z-0">
				<HamburgerMenu />
				<div className="w-full h-full bg-gray-100">
					{/** <Dashboard /> */}
				</div>
			</div>
		</div>
	);
}

export default App;
