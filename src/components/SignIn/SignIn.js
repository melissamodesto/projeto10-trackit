import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm";

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
      <SignInForm pageLoaded={pageLoaded} setPageLoaded={setPageLoaded}/>
    </>
  );
}
