import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page";
import RecipePage from "./pages/recipe-page";
import Navbar from "./components/ui/nav-bar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}
