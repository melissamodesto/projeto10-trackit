import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

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
        const { data } = response;
        console.log(response);
        console.log(data);
        navigate("../");
      })
      .catch((error) => {
        alert(
          "Não foi possivel cadastrar o usuário! Verifique se o email já está cadastrado ou algum campo está errado"
        );
        setPageLoaded(true);
        console.log('oi');
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
          <input
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
          <input
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
          <input
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
          <button className="button-login">{fillButton()}</button>
        </form>
        <div className="signup">
          <Link to="../">Já tem uma conta? Faça login!</Link>
        </div>
      </div>
    </div>
  );
}
