import React from "react";

export default function TodayHabit({
  todayHabit: { id, name, done, currentSequence, highestSequence },
  setHabitAsDone,
}) {
  const highestSequenceEl =
    currentSequence === highestSequence ? (
      <span>{highestSequence} dias</span>
    ) : (
      `${highestSequence} dias`
    );

  return done ? (
    <div>
      <div>
        <h3>{name}</h3>
        <p>Sequência atual: {currentSequence} dias</p>
        <p>
          Seu recorde: {highestSequenceEl} dias
        </p>
      </div>
      <button onClick={() => setHabitAsDone(id)}>
        <ion-icon name="checkmark-outline"></ion-icon>
      </button>
    </div>
  ) : (
    <div>
      <div>
        <h3>{name}</h3>
        <p>Sequência atual: {currentSequence} dias</p>
        <p>Seu recorde: {highestSequenceEl} dias</p>
      </div>
      <button onClick={() => setHabitAsDone(id)}>
        <ion-icon name="checkmark-outline"></ion-icon>
      </button>
    </div>
  );
}
