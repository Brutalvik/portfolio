import { FC } from "react";
import styles from "./Name.module.css";
import { NameInterface } from "features/interfaces";

const Name: FC<NameInterface> = ({ childName }) => {
  return (
    <div className={styles.svgWrapper}>
      <svg height="70" width="320">
        <text x="50%" y="50%" textAnchor="middle" className={styles.text}>
          {childName}
        </text>
        <rect className={styles.shape} height="60" width="320" />
      </svg>
    </div>
  );
};

export default Name;
