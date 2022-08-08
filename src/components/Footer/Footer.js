import React, { useContext } from "react";
import ContextPercentage from "../Context/ContextPercentage";
import { buildStyles } from "react-circular-progressbar";
import * as style from "../../style/styles";

export default function Footer() {
  const {percentage} = useContext(ContextPercentage);

  return (
    <style.Footer>
      <style.FooterAltLink to="/habitos">
        <style.FooterLinkWrapped>
          <p>Hábitos</p>
        </style.FooterLinkWrapped>
      </style.FooterAltLink>
      <style.FooterLink to="/hoje">
        <style.TodayButton>
          <style.CenteredCircularProgressbar
            value={percentage}
            backgroundpadding={6}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              pathTransition: "stroke-dashoffset 0.5s ease 0s",
            })}
          />
          <p>Hoje</p>
        </style.TodayButton>
      </style.FooterLink>
      <style.FooterAltLink to="/historico">
        <style.FooterLinkWrapped>
          <p>Histórico</p>
        </style.FooterLinkWrapped>
      </style.FooterAltLink>
    </style.Footer>
  );
}
