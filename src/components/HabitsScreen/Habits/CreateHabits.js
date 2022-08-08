import React, { useEffect, useContext } from "react";
import CreateHabitContext from "../../Context/CreateHabitContext";
import { ThreeDots } from "react-loader-spinner";
import * as style from "../../../style/styles";

export default function CreateHabit({
  saveHabit,
  toggleCreateHabitContainer,
  componentLoaded,
  setComponentLoaded,
}) {
  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { habitName, setHabitName } = useContext(CreateHabitContext);
  const { habitDays, setHabitDays } = useContext(CreateHabitContext);

  useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 2000);
  }, []);

  const buttonsDaysOfWeek = daysOfWeek.map((day, index) => {
    if (!habitDays.includes(index)) {
      return (
        <style.DayButton
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
        </style.DayButton>
      );
    }
    return (
      <style.DayButton
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
      </style.DayButton>
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
  }

  return (
    <style.CreateHabit>
      <style.Input
        value={habitName}
        onChange={(event) => setHabitName(event.target.value)}
        type="text"
        placeholder="nome do hábito"
        required
        disabled={disableWhileLoading()}
      />
      <div>{buttonsDaysOfWeek}</div>
      <style.AddHabitButtons>
        <style.CancelButton
          onClick={() => {
            toggleCreateHabitContainer(false);
            setComponentLoaded(false);
          }}
        >
          Cancelar
        </style.CancelButton>
        <style.DefaultButton
          onClick={handleSaveHabit}
          disabled={disableWhileLoading()}
        >
          {fillButton()}
        </style.DefaultButton>
      </style.AddHabitButtons>
    </style.CreateHabit>
  );
}
