import { FC, Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import styles from "./Home.module.css";
import { useAppSelector } from "app/hooks";
import ProfileImage from "assets/vik.png";
import Name from "UI/Name/Name";
import Frame from "UI/Frame/Frame";

const Home: FC = () => {
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
          <Name childName="Vikram Kumar" />
          <Frame child={<img src={ProfileImage} alt="profile" />} />
        </div>
        <div
          className={
            darkMode
              ? `${styles.rightColumn} ${styles.light}`
              : `${styles.rightColumn} ${styles.dark}`
          }
        >
          right
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
