import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styleLoginScreen.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function LoginScreen({ pageLoaded, setPageLoaded }) {
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userLoginData;

  const signInPostForm =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  const navigate = useNavigate();

  function fillButton() {
    return !pageLoaded ? (
      <ThreeDots color="#fff" height={40} width={40} />
    ) : (
      "Entrar"
    );
  }

  function disableWhileLoading() {
    return !pageLoaded ? "disabled" : "";
  }

  function handleSubmit(event) {
    event.preventDefault();

    let promise = axios.post(signInPostForm, userLoginData);
    promise
      .then((response) => {
        const {
          data: { name, id, email, image, token },
        } = response;
        localStorage.setItem("token", token);
        const newUserData = {
          name,
          image,
          id,
          email,
          isLoggedIn: true,
        };
        localStorage.setItem("userData", JSON.stringify(newUserData));
        navigate("../hoje");
      })
      .catch((error) => {
        alert("Usuário e/ou senha inválido(s)");
        setPageLoaded(true);
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
            required
            disabled={disableWhileLoading()}
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
            required
            disabled={disableWhileLoading()}
          />
          <button className="button-login">{fillButton()}</button>
        </form>
        <div className="signup">
          <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}
