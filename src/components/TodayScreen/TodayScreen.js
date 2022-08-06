import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TodayHabits from "./components/TodayHabits.js";

export default function TodayPage() {
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

        const promise = axios.get(getToday, config);
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