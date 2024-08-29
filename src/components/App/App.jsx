import css from "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";
import DetailsCamperPage from "../../pages/DetailsCamperPage/DetailsCamperPage.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";

const App = () => {
  return (
    <div>
      <header className={css.header}>
        <Logo></Logo>
        <Navigation></Navigation>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsCamperPage />} />
      </Routes>
    </div>
  );
};

export default App;
