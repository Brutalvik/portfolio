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
        <div className={styles.skillcontainer}>
          <div>
            <ProgressBar width="95%" title="HTML/CSS" />
            <ProgressBar width="95%" title="Javascript" />
            <ProgressBar width="90%" title="Express JS" />
            <ProgressBar width="95%" title="React" />
            <ProgressBar width="95%" title="Node JS" />
            <ProgressBar width="80%" title="Microservices" />
            <ProgressBar width="90%" title="REST API" />
            <ProgressBar width="75%" title="GraphQL" />
          </div>
          <div className={styles.circularskill}>
            <CircularProgress percentage={90} title="Azure DevOps" />
            <CircularProgress percentage={70} title="Cosmos DB" />
            <CircularProgress percentage={75} title="No SQL" />
            <CircularProgress percentage={75} title="No SQL" />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default About;
