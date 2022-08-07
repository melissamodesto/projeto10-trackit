import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styleHeader.css";

export default function Header() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorage.getItem('token') && localStorage.getItem('userData'))) {
      navigate('/');
    }
  } , []);

  const userData = JSON.parse(localStorage.getItem('userData'));
  const image = userData;

  return userData ? (
    <div className="header">
      <h1 className="title">TrackIt</h1>
      <img className="header-profile" src={image} />
    </div>
  ) : (
    <></>
  );
}
