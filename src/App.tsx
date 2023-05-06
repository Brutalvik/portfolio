import { FC, Suspense, lazy } from "react";
import styles from "./App.module.css";
import { useAppSelector } from "app/hooks";
import { Routes, Route } from "react-router-dom";

//Components
import Header from "components/Header/Header";
import Home from "components/Home/Home";
import SpinnerItem from "UI/Spinner/SpinnerItem";

//Lazy Loading
const About = lazy(() => import("components/About/About"));

const App: FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const theme = darkMode ? styles.light : styles.dark;
  return (
    <div className={theme}>
      <Suspense fallback={<SpinnerItem />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
