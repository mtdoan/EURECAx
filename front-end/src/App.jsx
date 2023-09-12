import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom"



import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';

function App() {
	global.route = 'http://localhost:3000';

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
