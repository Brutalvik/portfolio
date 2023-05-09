import { FC, Suspense } from "react";
import SpinnerItem from "UI/Spinner/SpinnerItem";
import styles from "./About.module.css";
import { aboutMeDescription } from "features/constants";
import { Divider, Stack, Text } from "@chakra-ui/react";
import Name from "UI/Name/Name";
import ProgressBar from "UI/ProgressBar/ProgressBar";
import CircularProgress from "UI/CircularProgress/CircularProgress";

const About: FC = () => {
  return (
    <Suspense fallback={<SpinnerItem />}>
      <div className={styles.container}>
        <Stack direction="row">
          <Name childName="About Me" />
        </Stack>
        <Stack direction="row">
          <Text className={styles.text}>{aboutMeDescription}</Text>
        </Stack>
      </div>
      <div className={styles.skillcontainer}>
        <div>
          <ProgressBar width="95%" title="Javascript" />
          <ProgressBar width="10%" title="React" />
        </div>
        <div>
          <CircularProgress percentage={90} title="Javascript" />
          <CircularProgress percentage={50} title="React" />
        </div>
      </div>
    </Suspense>
  );
};

export default About;
