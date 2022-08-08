import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../style/GlobalStyle";
import ContextPercentage from "./Context/ContextPercentage";
import TodayHabitsContext from "./Context/TodayHabitsContext";
import UserContext from "./Context/UserContext";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import HabitsScreen from "./HabitsScreen/HabitsScreen";
import TodayScreen from "./TodayScreen/TodayScreen";
import HistoryScreen from "./HistoryScreen/HistoryScreen";
import "react-loader-spinner";
import axios from "axios";

export default function App() {
  const [percentage, setPercentage] = useState(0);
  const [todayHabits, setTodayHabits] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const getTodayHabits =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    if (userLoggedIn) {
      const promise = axios.get(getTodayHabits, config);
      promise
        .then((response) => {
          const { data } = response;
          setTodayHabits(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userLoggedIn]);

  useEffect(() => {
    getPercentage();
  }, [todayHabits]);

  function getPercentage() {
    const countHabitsDone = todayHabits.filter(
      (todayHabit) => todayHabit.done
    ).length;
    const countTotalHabits = todayHabits.length;

    setPercentage(((countHabitsDone / countTotalHabits) * 100).toFixed(2));
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      <TodayHabitsContext.Provider value={{ todayHabits, setTodayHabits }}>
        <ContextPercentage.Provider value={{ percentage, setPercentage }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn setUserLoggedIn={(value) => setUserLoggedIn(value)} />} />;
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/habitos" element={<HabitsScreen />} />
              <Route path="/hoje" element={<TodayScreen />} />
              <Route path="/historico" element={<HistoryScreen />} />
            </Routes>
          </BrowserRouter>
        </ContextPercentage.Provider>
      </TodayHabitsContext.Provider>
      </UserContext.Provider>
    </>
  );
}
