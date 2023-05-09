import { FC } from "react";
import styles from "./ProgressBar.module.css";
import { useAppSelector } from "app/hooks";
import { ProgressBarInterface } from "features/interfaces";

const ProgressBar: FC<ProgressBarInterface> = ({ width, title }) => {
  const { darkMode } = useAppSelector((state) => state.theme);
  const inLineStyle = (definedWidth: string) => {
    return { width: definedWidth };
  };
  return (
    <div className={styles.container}>
      <label>{title}</label>
      <div className={styles.progress}>
        <div
          className={`${styles.innerprogress} ${width ? "stroke" : ""}`}
          style={{ width: `${width}` }}
        ></div>
      </div>
      <span className={styles.text}>{width}</span>
    </div>
  );
};

export default ProgressBar;
