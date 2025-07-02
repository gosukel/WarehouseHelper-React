import { useState } from "react";
import "./App.css";
import CalcPage from "./components/densityCalculatorComponents/calcPage/CalcPage";

function App() {
    const [calcPage, setCalcPage] = useState(true);
    return <>{calcPage && <CalcPage />}</>;
}

export default App;
