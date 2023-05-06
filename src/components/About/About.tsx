import { FC, Suspense } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import SpinnerItem from "UI/Spinner/SpinnerItem";

const About: FC = () => {
  return <Suspense fallback={<SpinnerItem size="xl" />}></Suspense>;
};

export default About;
