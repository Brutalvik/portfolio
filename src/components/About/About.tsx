import { FC, Suspense } from "react";
import SpinnerItem from "UI/Spinner/SpinnerItem";
import styles from "./About.module.css";
import { aboutMeDescription } from "features/constants";
import { Divider, Stack, Text } from "@chakra-ui/react";
import Name from "UI/Name/Name";

const About: FC = () => {
  return (
    <Suspense fallback={<SpinnerItem />}>
      <div className={styles.container}>
        <Stack direction="row" h="auto" p={2}>
          <Name childName="About Me" />
        </Stack>
        <Stack direction="row" h="auto" p={2}>
          <Divider orientation="vertical" />
          <Text className={styles.text}>{aboutMeDescription}</Text>
        </Stack>
      </div>
    </Suspense>
  );
};

export default About;
