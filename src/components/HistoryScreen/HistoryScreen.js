import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import History from "./History/History";
import GlobalStyle from "../../style/GlobalStyle";

export default function HistoryScreen() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <History />
      <Footer />
    </>
  );
}
