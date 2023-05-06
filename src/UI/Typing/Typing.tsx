import { TypingInterface } from "features/interfaces";
import { FC } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Typing.module.css";

const Typing: FC<TypingInterface> = ({ sequence }) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      deletionSpeed={1}
      className={styles.typing}
    />
  );
};

export default Typing;
