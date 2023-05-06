import { FC, lazy } from "react";
import styles from "./App.module.css";
import { useAppSelector } from "app/hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "components/Header/Header";

//Lazy Loading
const Home = lazy(() => import("components/Home/Home"));

const App: FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const theme = darkMode ? styles.light : styles.dark;
  return (
    <div className={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
