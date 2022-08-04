import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./styleLoginScreen.css";
import axios from "axios";

export default function LoginScreen(props) {
  const {
    setUserLoginData,
    userLoginData,
    userLoginData: { email, password },
  } = props;

  const signInPostForm =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    let promise = axios.post(signInPostForm, userLoginData);
    promise
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        localStorage.setItem("token", data.token);
        navigate("../habits");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login-screen">
      <img className="logo" src="./logo-trackit.png" alt="logo trackit" />
      <div className="input-login">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            type="text"
            value={email}
            onChange={(event) =>
              setUserLoginData({
                ...userLoginData,
                email: event.target.value,
              })
            }
            placeholder="email"
            autoComplete="on"
          />
          <input
            type="password"
            value={password}
            onChange={(event) =>
              setUserLoginData({
                ...userLoginData,
                password: event.target.value,
              })
            }
            placeholder="senha"
            autoComplete="on"
          />
          <div className="button-login">
            <Link to="/habitos"> Entrar </Link>
            </div>
        </form>
        <div className="signup">
          <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}
