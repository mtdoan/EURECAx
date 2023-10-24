// import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/inter";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardFlow from "components/DashboardFlow";
import Canvas from "components/dashboard/canvas/Canvas";
import Canvas from "components/dashboard/canvas/Canvas";

function App() {
  global.route = "http://localhost:3000";
  global.llm = "http://localhost:4000" // https://chaos1-llm.vercel.app/llm

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route index element={<Canvas />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Canvas />} />
        </Route>
        <Route path="/new-project" element={<DashboardFlow />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
