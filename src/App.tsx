import { FC } from "react";
import styles from "./App.module.css";

//Components
import Header from "components/Header/Header";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const App: FC = () => {
  return (
    <div className={styles.main}>
      <Header />
    </div>
  );
};

export default App;
