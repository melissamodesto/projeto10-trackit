import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
