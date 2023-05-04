import { FC } from "react";
import styles from "./Name.module.css";
import { NameInterface } from "features/interfaces";
import { useAppSelector } from "app/hooks";

const Name: FC<NameInterface> = ({ childName }) => {
  const { darkMode } = useAppSelector((state) => state.theme);
  return (
    <div className={styles.svgWrapper}>
      <svg height="70" width="320">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className={darkMode ? styles.textLight : styles.textDark}
          style={{ fill: darkMode ? "#005" : "#fff" }}
        >
          {childName?.toUpperCase()}
        </text>
        <rect
          className={darkMode ? styles.shapeLight : styles.shapeDark}
          height="60"
          width="320"
        />
      </svg>
    </div>
  );
};

export default Name;
