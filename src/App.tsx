import { FC } from "react";
import styles from "./App.module.css";
import { useAppSelector } from "app/hooks";

//Components
import Header from "components/Header/Header";

const App: FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const theme = darkMode ? styles.light : styles.dark;
  return (
    <div className={theme}>
      <Header />
    </div>
  );
};

export default App;
