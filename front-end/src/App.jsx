// import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/inter";

import Dashboard from "./components/dashboard/Dashboard";
import DashboardFlow from "./components/DashboardFlow";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  global.route = "http://localhost:3000";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="new-project" element={<DashboardFlow />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App;
