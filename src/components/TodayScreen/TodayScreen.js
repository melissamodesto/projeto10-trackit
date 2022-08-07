import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TodayHabits from "./TodayHabits/TodayHabit";

export default function TodayScreen() {
    const [todayHabits, setTodayHabits] = useState(null);

    useEffect(() => {
        const getTodayHabits =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        console.log(token);

        const promise = axios.get(getTodayHabits, config);
        promise
            .then((response) => {
                const { data } = response;
                console.log(data);
                setTodayHabits(todayHabits);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Header />
            <TodayHabits />
            <Footer />
        </>
    );
}