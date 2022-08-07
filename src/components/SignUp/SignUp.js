import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../SignUp/SignUpForm";

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
      <SignUpForm
        setUserData={setUserData}
        userData={userData}
        pageLoaded={pageLoaded}
        setPageLoaded={setPageLoaded}
      />
    </>
  );
}
