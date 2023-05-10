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
const Timeline = lazy(
  () => import("components/TimelineContent/TimelineContent")
);
const Portfolio = lazy(() => import("components/Portfolio/Portfolio"));

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
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
