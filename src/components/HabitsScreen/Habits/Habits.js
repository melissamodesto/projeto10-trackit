import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Habit from "./Habit.js";
import axios from "axios";
/* import CreateHabit from "./CreateHabit.js"; */
import NoTasks from "../../Messages/NoTasks/NoTasks";
import NoHabits from "./NoHabits.js";

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const habitsGet =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        console.log(token);

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
                return <Habit habit={habit} />;
            });
        } else {
            return <NoHabits />;
        }
    }
    const habitsContent = checkHabitsList();

    return (
        <>
            <div>
                <NoTasks />
                <div>
                    {/* <CreateHabit /> */}
                    {habitsContent}
                </div>
            </div>
        </>
    );
}