import DashboardFlow from "components/DashboardFlow";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/inter";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
	global.route = "http://localhost:3000";

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="new-project" element={<DashboardFlow />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
