import { BrowserRouter, Routes, Route } from "react-router-dom";
import TriangleCalculator from "../pages/TriangleCalcuator";
import RectangleCalculator from "../pages/RectangleCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/jafar" element={<div>Man Jafar Hastam!</div>} />
        <Route path="/triangle" element={<TriangleCalculator />} />
        <Route path="/rectangle" element={<RectangleCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
