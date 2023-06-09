import { TypingInterface } from "features/interfaces";
import { FC } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Typing.module.css";

const Typing: FC<TypingInterface> = ({ sequence, repeat }) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={true}
      repeat={repeat}
      deletionSpeed={1}
      className={styles.typing}
      style={{ fontSize: "1.2em" }}
    />
  );
};

export default Typing;
