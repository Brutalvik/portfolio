import { FC } from "react";
import styles from "./CircularProgress.module.css";
import { useAppSelector } from "app/hooks";
import { CircularProgressInterface } from "features/interfaces";

const CircularProgress: FC<CircularProgressInterface> = ({
  percentage,
  title,
}) => {
  const { darkMode } = useAppSelector((state) => state.theme);
  const radius = 60;
  const circularWidth = 200;
  const percentageValue = percentage >= 0 && percentage <= 100 ? percentage : 0;
  // const strokeArray = radius * Math.PI * 2;
  // const strokeOffset = strokeArray - (strokeArray * percentageValue) / 100;
  return (
    <div className={styles.container}>
      <label>{title}</label>
      <svg
        width={circularWidth}
        height={circularWidth}
        viewBox={`0 0 ${circularWidth} ${circularWidth}`}
      >
        <circle
          cx={circularWidth / 2}
          cy={circularWidth / 2}
          strokeWidth={"15px"}
          r={radius}
          className={styles.circlebackground}
        ></circle>
        <circle
          cx={circularWidth / 2}
          cy={circularWidth / 2}
          strokeWidth={"10px"}
          r={radius}
          className={styles.circleprogress}
          style={
            {
              // "--strokeArray": strokeArray,
              // "--strokeOffset": strokeOffset,
              "--percentage": percentageValue,
            } as React.CSSProperties
          }
          transform={`rotate(-90 ${circularWidth / 2} ${circularWidth / 2})`}
        ></circle>
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className={darkMode ? styles.textLight : styles.textDark}
        >
          {percentageValue}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
