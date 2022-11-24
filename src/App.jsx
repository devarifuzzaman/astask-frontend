import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard-Page";
import CreatePage from "./pages/Create-Page";
import NewPage from "./pages/New-Page";
import ProgressPage from "./pages/Progress-Page";
import CompletedPage from "./pages/Completed-Page";
import CanceledPage from "./pages/Canceled-Page";
import LoginPage from "./pages/Login-Page";
import RegistrationPage from "./pages/Registration-Page";
import ForgetpassPage from "./pages/Forgetpass-Page";
import Page404 from "./pages/404-Page";
import FullScreenLoader from "./components/Layout/FullScreenLoader";
import { getToken } from "./helper/SessionHelper";

const App = () => {

  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/Create" element={<CreatePage />} />
            <Route exact path="/All" element={<NewPage />} />
            <Route exact path="/Progress" element={<ProgressPage />} />
            <Route exact path="/Completed" element={<CompletedPage />} />
            <Route exact path="/Canceled" element={<CanceledPage />} />
            <Route exact path="/Profile" element={<ProgressPage />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
            <Route exact path="/Forgetpass" element={<ForgetpassPage />} />
            <Route exact path="*" element={< Page404 />} />

          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  }
  else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="/login" replace />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Registration" element={<RegistrationPage />} />
            <Route exact path="/Forgetpass" element={<ForgetpassPage />} />
            <Route exact path="*" element={< Page404 />} />
          </Routes>
        </BrowserRouter>
        <FullScreenLoader />
      </Fragment>
    );
  }




};

export default App;
