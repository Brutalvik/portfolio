import { FC, Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import styles from "./Home.module.css";
import { useAppSelector } from "app/hooks";
import ProfileImage from "assets/vik.png";
import Name from "UI/Name/Name";
import Frame from "UI/Frame/Frame";
import Typing from "UI/Typing/Typing";

const Home: FC = () => {
  const sequenceData = [
    "Frontend Developer",
    1000,
    "Backend Developer",
    1000,
    "Fullstack Developer",
    1000,
  ];
  const { darkMode } = useAppSelector((state) => state.theme);

  return (
    <Suspense fallback={<Spinner />}>
      <div className={styles.container}>
        <div
          className={
            darkMode
              ? `${styles.leftColumn} ${styles.light}`
              : `${styles.leftColumn} ${styles.dark}`
          }
        >
          <Frame child={<img src={ProfileImage} alt="profile" />} />
        </div>
        <div
          className={
            darkMode
              ? `${styles.rightColumn} ${styles.light}`
              : `${styles.rightColumn} ${styles.dark}`
          }
        >
          <div className={styles.content}>
            <h1>I am</h1>
            <Name childName="Vikram Kumar" />

            <p>And I am a</p>
            <div className={styles.typing}>
              <Typing sequence={sequenceData} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
