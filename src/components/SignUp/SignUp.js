import { Link } from "react-router-dom";
import React, { useState } from "react";
import SignUpForm from "../SignUp/SignUpForm";

export default function SignUp() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  return (
    <>
      <SignUpForm setUserData={setUserData} userData={userData} />
      <div className="signup">
        <Link to="../">Já tem uma conta? Faça login!</Link>
      </div>
    </>
  );
}
