// import React, { useState } from 'react';
import React, { Fragment } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/inter";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardFlow from "components/DashboardFlow";
import Canvas from "components/dashboard/canvas/Canvas";
import ProfileCard from "components/dashboard/ProfileCard";

import PrivateRoute from "navigation/PrivateRoute";
import PublicRoute from "navigation/PublicRoute";

function App() {
  global.route = "https://eurecax-api-vercel.vercel.app"; // eurecax-api-vercel.vercel.app or http://localhost:3000
  global.llm = "http://localhost:4000"; // https://chaos1-llm.vercel.app or http://localhost:4000

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />}>
              <Route index element={<Canvas />} />
            </Route>
          </Route>
          <Route exact path="/dashboard" element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />}>
              <Route index element={<Canvas />} />
            </Route>
          </Route>
          <Route exact path="/new-project" element={<PrivateRoute />}>
            <Route exact path="/new-project" element={<DashboardFlow />} />
          </Route>
          <Route exact path="/profile" element={<PrivateRoute />}>
            <Route exact path="/profile" element={<ProfileCard />} />
          </Route>
          <Route exact path="/profile" element={<PrivateRoute />}>
            <Route exact path="/profile" element={<ProfileCard />} />
          </Route>
          <Route exact path="/signUp" element={<PublicRoute />}>
            <Route exact path="/signUp" element={<SignUp />} />
          </Route>
          <Route exact path="/signIn" element={<PublicRoute />}>
            <Route exact path="/signIn" element={<SignIn />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
