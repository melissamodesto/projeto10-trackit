import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Habits from "./Habits/Habits";
import GlobalStyle from "../../style/GlobalStyle";

export default function HabitsScreen() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Habits />
            <Footer />
        </>
    );
}
