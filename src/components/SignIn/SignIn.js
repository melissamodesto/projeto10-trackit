import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm";
import GlobalStyle from "../../style/GlobalStyle";
import * as style from "../../style/styles";

export default function SignIn() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userData") && localStorage.getItem("token")) {
      navigate("/hoje");
    }
    setTimeout(() => {
      setPageLoaded(true);
    }, 200);
  }, []);

  return (
    <>
      <GlobalStyle />
      <style.LoginContainer>
        <SignInForm pageLoaded={pageLoaded} setPageLoaded={setPageLoaded} />
      </style.LoginContainer>
    </>
  );
}
