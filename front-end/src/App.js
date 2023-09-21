import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import "@fontsource/inter";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import DashboardFlow from "components/DashboardFlow";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/inter";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "components/auth/SignIn";

function App() {
	global.route = "http://localhost:3000";

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="new-project" element={<DashboardFlow />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
