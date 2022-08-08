import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import * as style from "../../style/styles";

export default function SignUpForm(props) {
  const {
    setUserData,
    userData,
    userData: { email, password, name, image },
    pageLoaded,
    setPageLoaded,
  } = props;
  const signUpPostForm =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  const navigate = useNavigate();

  function fillButton() {
    return !pageLoaded ? (
      <ThreeDots color="#fff" height={40} width={40} />
    ) : (
      "Cadastrar"
    );
  }

  function disableWhileLoading() {
    return !pageLoaded ? "disabled" : "";
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPageLoaded(false);

    let promise = axios.post(signUpPostForm, userData);
    promise
      .then((response) => {
        navigate("../");
      })
      .catch((error) => {
        alert(
          "Não foi possivel cadastrar o usuário! Verifique se o email já está cadastrado ou algum campo está errado"
        );
        setPageLoaded(true);
      });
  }

  return (
    <style.Form>
      <img src="./logo-trackit.png" alt="logo trackit" />
      <div>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <style.Input
            value={email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            type="email"
            placeholder="email"
            autoComplete="on"
            disabled={disableWhileLoading()}
            required
          />
          <style.Input
            value={password}
            onChange={(event) =>
              setUserData({
                ...userData,
                password: event.target.value,
              })
            }
            type="password"
            placeholder="senha"
            autoComplete="on"
            disabled={disableWhileLoading()}
            required
          />
          <style.Input
            value={name}
            onChange={(event) =>
              setUserData({ ...userData, name: event.target.value })
            }
            type="text"
            placeholder="nome"
            autoComplete="on"
            disabled={disableWhileLoading()}
            required
          />
          <style.Input
            value={image}
            onChange={(event) =>
              setUserData({ ...userData, image: event.target.value })
            }
            required
            type="url"
            placeholder="foto"
            autoComplete="on"
            disabled={disableWhileLoading()}
          />
          <style.DefaultButton>{fillButton()}</style.DefaultButton>
        </form>
        <style.StyledLink to="../">
          Já tem uma conta? Faça login!
        </style.StyledLink>
      </div>
    </style.Form>
  );
}
