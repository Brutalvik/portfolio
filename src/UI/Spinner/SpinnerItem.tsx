import { FC } from "react";
import { useAppSelector } from "app/hooks";
import styles from "./SpinnerItem.module.css";

const SpinnerItem: FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <div className={styles.container}>
      <span className={darkMode ? styles.light : styles.dark}></span>
    </div>
  );
};

export default SpinnerItem;
