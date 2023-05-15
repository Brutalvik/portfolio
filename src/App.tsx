import { FC, Suspense, lazy } from "react";
import styles from "./App.module.css";
import { useAppSelector } from "app/hooks";
import { Routes, Route } from "react-router-dom";

//Components
import Header from "components/Header/Header";
import Home from "components/Home/Home";
import SpinnerItem from "UI/Spinner/SpinnerItem";

//Lazy Loading Components
const About = lazy(() => import("components/About/About"));
const Timeline = lazy(
  () => import("components/TimelineContent/TimelineContent")
);
const Portfolio = lazy(() => import("components/Portfolio/Portfolio"));
const Contact = lazy(() => import("components/Contact/Contact"));
const NotFound = lazy(() => import("components/NotFound/NotFound"));
const Dashboard = lazy(() => import("components/Dashboard/Dashboard"));

const App: FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const theme = darkMode ? styles.light : styles.dark;
  const { isLoggedIn } = useAppSelector((state) => state.login);
  return (
    <div className={theme}>
      <Suspense fallback={<SpinnerItem />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Portfolio />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
