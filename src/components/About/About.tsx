import { FC, Suspense } from "react";
import SpinnerItem from "UI/Spinner/SpinnerItem";
import Register from "Forms/Register/Register";

const About: FC = () => {
  return (
    <Suspense fallback={<SpinnerItem size="xl" />}>
      <Register />
    </Suspense>
  );
};

export default About;
