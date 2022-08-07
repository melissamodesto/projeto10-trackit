import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context/Context";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import HabitsScreen from "./HabitsScreen/HabitsScreen";
import TodayScreen from "./TodayScreen/TodayScreen";
import HistoryScreen from "./HistoryScreen/HistoryScreen";

export default function App() {
  function checkUserIsLoggedIn() {
    if (!(localStorage.getItem("userData") && localStorage.getItem("token"))) {
      return <Route path="/" element={<SignIn />} />;
    } else {
      return <Route path="/" element={<TodayScreen />} />;
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {checkUserIsLoggedIn()}
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<HabitsScreen />} />
          <Route path="/hoje" element={<TodayScreen />} />
          <Route path="/historico" element={<HistoryScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
