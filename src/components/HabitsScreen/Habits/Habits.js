import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Habit from "./Habit.js";
import axios from "axios";
import CreateHabit from "./CreateHabits";
import SecondHeader from "../../Header/SecondHeader.js";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [toggleCreateHabit, setToggleCreateHabit] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  console.log(token);

  useEffect(() => {
    const habitsGet =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios.get(habitsGet, config);
    promise
      .then((response) => {
        const { data } = response;
        console.log(data);
        setHabits(data);
      })
      .catch((error) => {
        alert(error);
        navigate("../");
      });
  }, []);

  function checkHabitsList() {
    if (habits.length > 0) {
      return habits.map((habit) => {
        return (
          <Habit
            habit={habit}
            removeTask={(habitId) => {
              removeTask(habitId);
            }}
          />
        );
      });
    } else {
      return <SecondHeader />;
    }
  }

  function checkCreateHabitContainer() {
    return toggleCreateHabit ? (
      <CreateHabit
        toggleCreateHabit={(value) => {
          toggleCreateHabit(value);
        }}
        saveHabit={(habitData) => {
          saveHabit(habitData);
        }}
      />
    ) : (
      <></>
    );
  }

  function saveHabit(habitData) {
    const CREATE_HABIT_URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promise = axios.post(CREATE_HABIT_URL, habitData, config);
    promise
      .then((response) => {
        const { data } = response;
        console.log(data);
        habitData.id = data.id;
      })
      .catch((error) => {
        console.log(error);
      });
    setHabits([...habits, habitData]);
  }

  function removeTask(habitId) {
    const deleteHabit = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
    axios.delete(deleteHabit, config);
    console.log("Oiiiiiii");
    const newHabits = habits.filter((habit, index) => {
      if (habit.id === habitId) {
        return false;
      } else {
        return true;
      }
    });
    setHabits(newHabits);
  }

  function toggleCreateTaskContainer(value) {
    setToggleCreateHabit(value);
  }

  const createHabitContent = checkCreateHabitContainer();
  const habitsContent = checkHabitsList();

  return (
    <>
      <div>
        <SecondHeader
          toggleCreateTaskContainer={(value) => {
            toggleCreateTaskContainer(value);
          }}
        />
        <div>
          {createHabitContent}
          {habitsContent}
        </div>
      </div>
    </>
  );
}
