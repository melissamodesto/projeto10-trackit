import React from "react";
import * as style from "../../../style/styles";
import TopMessageToday from "./TopMessageToday";

export default function TodayHabit({
  todayHabit,
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  setHabitAsDone,
  markAsDone,
}) {
  const highestSequenceEl =
    currentSequence === highestSequence ? (
      <span>{highestSequence} dias</span>
    ) : (
      `${highestSequence} dias`
    );

  return done ? (
    <style.Container>
      <style.TodayHabitDone>
        <div>
          <h3>{name}</h3>
          <p>
            Sequência atual: <span>{currentSequence} dias</span>
          </p>
          <p>Seu recorde: {highestSequenceEl}</p>
        </div>
        <button onClick={() => setHabitAsDone(id)}>
          <ion-icon name="checkmark-outline"></ion-icon>
        </button>
      </style.TodayHabitDone>
    </style.Container>
  ) : (
    <style.Container>
      <style.TodayHabit>
        <div>
          <h3>{name}</h3>
          <p>Sequência atual: {currentSequence} dias</p>
          <p>Seu recorde: {highestSequenceEl} </p>
        </div>
        <button onClick={() => setHabitAsDone(id)}>
          <ion-icon name="checkmark-outline"></ion-icon>
        </button>
      </style.TodayHabit>
    </style.Container>
  );
}
