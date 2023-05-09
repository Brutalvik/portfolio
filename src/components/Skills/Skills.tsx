import SpinnerItem from "UI/Spinner/SpinnerItem";
import { FC, Suspense } from "react";

const Skills: FC = () => {
  return <Suspense fallback={<SpinnerItem />}>Skills</Suspense>;
};

export default Skills;
