import React, { useState, useEffect, useContext } from "react";
import Context from "../../Context/Context";
import { ThreeDots } from "react-loader-spinner";

export default function CreateHabit({
  saveHabit,
  toggleCreateHabit,
  componentLoaded,
  setComponentLoaded,
}) {
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  const [habitName, setHabitName] = useContext(Context);
  const [habitDays, setHabitDays] = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 2000);
  }, []);

  const buttonsDaysOfWeek = daysOfWeek.map((day, index) => {
    if (!habitDays.includes(index)) {
      return (
        <div
          onClick={() => {
            if (!habitDays.includes(index)) {
              habitDays.push(index);
            } else {
              habitDays.sort();
              habitDays.splice(habitDays.indexOf(index), 1);
            }
            habitDays.sort();
            setHabitDays([...habitDays]);
          }}
        >
          {day}
        </div>
      );
    }
    return (
      <div
        onClick={() => {
          if (!habitDays.includes(index)) {
            habitDays.push(index);
          } else {
            habitDays.sort();
            habitDays.splice(habitDays.indexOf(index), 1);
          }
          habitDays.sort();
          setHabitDays([...habitDays]);
        }}
      >
        {day}
      </div>
    );
  });

  function disableWhileLoading() {
    return !componentLoaded ? "disabled" : "";
  }

  function fillButton() {
    return !componentLoaded ? (
      <ThreeDots color="#fff" height={40} width={40} />
    ) : (
      "Salvar"
    );
  }

  function handleSaveHabit() {
    saveHabit({ name: habitName, days: habitDays });
    setHabitName("");
    setHabitDays([]);
    toggleCreateHabit(false);
  }

  return (
    <div>
      <div
        value={habitName}
        onChange={(event) => setHabitName(event.target.value)}
        type="text"
        placeholder="nome do hábito"
        required
        disabled={disableWhileLoading()}
      />
      <div>{buttonsDaysOfWeek}</div>
      <div>
        <div
          onClick={() => {
            toggleCreateHabit(false);
            setComponentLoaded(false);
          }}
        >
          Cancelar
        </div>
        <div onClick={handleSaveHabit} disabled={disableWhileLoading()}> 
          {fillButton()}
        </div>
      </div>
    </div>
  );
}
