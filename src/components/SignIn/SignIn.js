import React, { useState } from "react";
import SignInForm from "./SignInForm";
/* import Logo from "./components/Logo.js"; */

export default function SignIn() {
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <SignInForm
        setUserLoginData={setUserLoginData}
        userLoginData={userLoginData}
      />
    </>
  );
}
