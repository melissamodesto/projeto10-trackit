import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpForm(props) {
  const {
    setUserData,
    userData,
    userData: { email, password, name, image },
  } = props;
  const signUpPostForm =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    let promise = axios.post(signUpPostForm, userData);
    promise
      .then((response) => {
        const { data } = response;
        console.log(response);
        console.log(data);
        navigate("../");
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
            value={email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            type="email"
            placeholder="email"
            autoComplete="on"
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
          />
          <input
            value={name}
            onChange={(event) =>
              setUserData({ ...userData, name: event.target.value })
            }
            type="text"
            placeholder="nome"
            autoComplete="on"
          />
          <input
            value={image}
            onChange={(event) =>
              setUserData({ ...userData, image: event.target.value })
            }
            type="url"
            placeholder="foto"
            autoComplete="on"
          />
          <div className="button-login" type="submit">Cadastrar</div>
        </form>
      </div>
    </div>
  );
}
