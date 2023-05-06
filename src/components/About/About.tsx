import { FC, Suspense } from "react";
import SpinnerItem from "UI/Spinner/SpinnerItem";
import Register from "Forms/Register/Register";

const About: FC = () => {
  return (
    <Suspense fallback={<SpinnerItem />}>
      <Register />
      {/* <SpinnerItem /> */}
    </Suspense>
  );
};

export default About;
