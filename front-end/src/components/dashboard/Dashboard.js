import 'bootstrap/dist/css/bootstrap.css'

import NavBar from './NavBar';
// import HamburgerMenu from './HamburgerMenu';
import CanvasGrid from './CanvasGrid';

export default function Dashboard() {
    return (
        <div className="App">
            <div>
                <NavBar />
                <CanvasGrid />
            </div>
        </div>
    )
}