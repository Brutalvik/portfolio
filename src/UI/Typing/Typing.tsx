import { TypingInterface } from "features/interfaces";
import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

const Typing: FC<TypingInterface> = ({ sequence }) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", display: "inline-block" }}
      deletionSpeed={1}
    />
  );
};

export default Typing;
