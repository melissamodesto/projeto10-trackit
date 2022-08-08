import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../SignUp/SignUpForm";
import GlobalStyle from '../../style/GlobalStyle';
import * as style from "../../style/styles";

export default function SignUp() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

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
      <SignUpForm
        setUserData={setUserData}
        userData={userData}
        pageLoaded={pageLoaded}
        setPageLoaded={setPageLoaded}
      />
      </style.LoginContainer>
    </>
  );
}
