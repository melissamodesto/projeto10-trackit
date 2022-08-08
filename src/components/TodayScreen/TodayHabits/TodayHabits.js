import React, { useContext, useEffect } from "react";
import axios from "axios";
import TopMessageToday from "./TopMessageToday";
import TodayHabit from "./TodayHabit";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import TodayHabitsContext from "../../Context/TodayHabitsContext";
import * as style from "../../../style/styles";

export default function TodayHabits() {
  const { todayHabits, setTodayHabits } = useContext(TodayHabitsContext);
  const { setUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    if (!(localStorage.getItem("userData") && localStorage.getItem("token"))) {
      setUserLoggedIn(false);
      navigate("../");
    } else {
      setUserLoggedIn(true);
    }
  }, []);

  function markAsDone(id) {
    const markChecked = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const markUnchecked = `https://mock-api.bootcamp.responderespondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    const newHabits = todayHabits.map((todayHabit) => {
      if (todayHabit.id === id) {
        if (todayHabit.done === false) {
          todayHabit.currentSequence === todayHabit.highestSequence
            ? (todayHabit.highestSequence += 1)
            : (todayHabit.highestSequence += 0);
          todayHabit.currentSequence += 1;

          const promise = axios.post(markChecked, "", config);
          promise
            .then((response) => {})
            .catch((error) => {
              console.log(error);
              todayHabit.currentSequence === todayHabit.highestSequence
                ? (todayHabit.highestSequence -= 1)
                : (todayHabit.highestSequence -= 0);
              todayHabit.currentSequence -= 1;
            });
        } else if (todayHabit.done === true) {
          todayHabit.currentSequence === todayHabit.highestSequence
            ? (todayHabit.highestSequence -= 1)
            : (todayHabit.highestSequence -= 0);
          todayHabit.currentSequence -= 1;

          const promise = axios.post(markUnchecked, "", config);
          promise
            .then((response) => {})
            .catch((error) => {
              console.log(error);

              todayHabit.currentSequence === todayHabit.highestSequence
                ? (todayHabit.highestSequence += 1)
                : (todayHabit.highestSequence += 0);
              todayHabit.currentSequence += 1;
            });
        }
        return {
          ...todayHabit,
          done: !todayHabit.done,
        };
      } else {
        return todayHabit;
      }
    });
    setTodayHabits([...newHabits]);
  }

  function checkTodayHabitsList() {
    if (todayHabits.length > 0) {
      return todayHabits.map((todayHabit) => {
        return (
          <TodayHabit
            key={todayHabit.id}
            todayHabit={todayHabit}
            setHabitAsDone={(id) => markAsDone(id)}
          />
        );
      });
    } else {
      return <></>;
    }
  }

  const todayHabitsContent = checkTodayHabitsList();

  return (
    <style.Container>
      <TopMessageToday todayHabits={todayHabits} />
      <style.TodayHabits>{todayHabitsContent}</style.TodayHabits>
    </style.Container>
  );
}
