import React, { useContext } from "react";
import ContextPercentage from "../../Context/ContextPercentage";
import * as style from "../../../style/styles";
import dayjs from "dayjs";

export default function TopMessageToday() {
  const { percentage } = useContext(ContextPercentage);

  function getDayOfWeek() {
    const dayNumber = dayjs().day();
    switch (dayNumber) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda-Feira";
      case 2:
        return "Terça-Feira";
      case 3:
        return "Quarta-Feira";
      case 4:
        return "Quinta-Feira";
      case 5:
        return "Sexta-Feira";
      default:
        return "Sábado";
    }
  }

  function getMonthAndDay() {
    return dayjs().format("DD/MM");
  }

  function getPercentage() {
    return percentage > 0 ? (
      <style.CounterHabitsDone>
        {percentage} % dos hábitos concluídos
      </style.CounterHabitsDone>
    ) : (
      <p>Nenhum hábito concluído ainda</p>
    );
  }

  return (
    <style.TodayTopMessage>
      <h2>
        {getDayOfWeek()}, {getMonthAndDay()}
      </h2>
      {getPercentage()}
    </style.TodayTopMessage>
  );
}
