import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TodayHabits from "./TodayHabits/TodayHabit";
import GlobalStyle from "../../style/GlobalStyle";

export default function TodayScreen() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TodayHabits />
      <Footer />
    </>
  );
}
