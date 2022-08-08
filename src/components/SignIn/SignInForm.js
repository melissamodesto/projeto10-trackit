import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../Context/UserContext";
import * as style from "../../style/styles";

export default function SignInForm({ pageLoaded, setPageLoaded }) {
  const { setUserLoggedIn } = useContext(UserContext);
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
    setPageLoaded(false);

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
        setUserLoggedIn(true);
        navigate("../hoje");
      })
      .catch((error) => {
        alert("Usuário e/ou senha inválido(s)");
        setPageLoaded(true);
      });
  }

  return (
    <style.Form>
      <img src="./logo-trackit.png" alt="logo trackit" />

      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <style.Input
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
        <style.Input
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
        <style.DefaultButton>{fillButton()}</style.DefaultButton>
      </form>
      <style.StyledLink to="/cadastro">
        Não tem uma conta? Cadastre-se
      </style.StyledLink>
    </style.Form>
  );
}
