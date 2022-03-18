import { BrowserRouter, Routes, Route } from "react-router-dom";
import TriangleCalculator from "../pages/TriangleCalcuator";
import RectangleCalculator from "../pages/RectangleCalculator";
import UsersList from "../pages/UsersList";
import UserDetail from "../pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/jafar" element={<div>Man Jafar Hastam!</div>} />
        <Route path="/triangle" element={<TriangleCalculator />} />
        <Route path="/rectangle" element={<RectangleCalculator />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
