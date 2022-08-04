import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import HabitsScreen from "./HabitsScreen/HabitsScreen";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<HabitsScreen />} />
          {/*<Route path="/today" element={<TodayPage />} />
          <Route path="/history" element={<HistoryPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
