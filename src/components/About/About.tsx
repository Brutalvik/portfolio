import { FC, Suspense } from "react";
import SpinnerItem from "UI/Spinner/SpinnerItem";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const About: FC = () => {
  return (
    <Suspense fallback={<SpinnerItem />}>
      <SpinnerItem />
    </Suspense>
  );
};

export default About;
