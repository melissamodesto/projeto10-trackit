import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import * as style from '../../../style/styles';

export default function History() {
  const { setUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorage.getItem("token") && localStorage.getItem("userData"))) {
      navigate("../");
      setUserLoggedIn(false);
    } else {
      setUserLoggedIn(true);
    }
  }, []);

  return (
    <style.Container>
      <style.History>
        <h3>Histórico</h3>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </style.History>
    </style.Container>
  );
}
