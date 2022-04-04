import { BrowserRouter, Routes, Route } from "react-router-dom";
import TriangleCalculator from "../pages/TriangleCalcuator";
import RectangleCalculator from "../pages/RectangleCalculator";
import UsersList from "../pages/UsersList";
import UserDetail from "../pages/UserDetail";
import PostsList from "../pages/PostsList";
import Ccc from "../pages/C";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/jafar" element={<div>Man Jeeffri Hastam!</div>} />
        <Route path="/triangle" element={<TriangleCalculator />} />
        <Route path="/rectangle" element={<RectangleCalculator />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/Posts" element={<PostsList />} />
        <Route path="/redux" element={<Ccc />} />
        <Route path="/users/:entityId" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
