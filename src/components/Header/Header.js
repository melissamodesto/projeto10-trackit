import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "../../style/styles";

export default function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorage.getItem("token") && localStorage.getItem("userData"))) {
      navigate("/");
    }
  }, []);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const image = userData.image;

  return userData ? (
    <style.Header>
      <style.HeaderLink to="../">
        <h1>TrackIt</h1>
      </style.HeaderLink>
      <img src={image} />
    </style.Header>
  ) : (
    <></>
  );
}
