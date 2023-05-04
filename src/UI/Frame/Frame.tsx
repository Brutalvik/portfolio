import { FC } from "react";
import styles from "./Frame.module.css";
import { FrameInterface } from "features/interfaces";

const Frame: FC<FrameInterface> = ({ child }) => {
  return (
    <div className={styles.container}>
      <div className={styles.shape}>
        <div className={styles.child}>{child}</div>
      </div>
    </div>
  );
};

export default Frame;
