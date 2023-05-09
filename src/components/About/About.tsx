import { FC, Suspense } from "react";
import SpinnerItem from "UI/Spinner/SpinnerItem";
import styles from "./About.module.css";
import { aboutMeDescription } from "features/constants";
import { Stack, Text } from "@chakra-ui/react";
import Name from "UI/Name/Name";
import ProgressBar from "UI/ProgressBar/ProgressBar";
import CircularProgress from "UI/CircularProgress/CircularProgress";
import { progressSkills, circularSkills } from "features/constants";
import {
  ProgresSkillsInterface,
  CircularSkillsInterface,
} from "features/interfaces";

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
        <div className={styles.skillcontainer}>
          <div>
            {progressSkills.map(
              ({ id, title, width }: ProgresSkillsInterface) => (
                <ProgressBar key={id} title={title} width={width} />
              )
            )}
          </div>
          <div className={styles.circularskill}>
            {circularSkills.map(
              ({ id, title, percentage }: CircularSkillsInterface) => (
                <CircularProgress
                  key={id}
                  title={title}
                  percentage={percentage}
                />
              )
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default About;
