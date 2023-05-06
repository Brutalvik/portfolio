import { FC, Suspense, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import styles from "./Home.module.css";
import { useAppSelector, useAppDispatch } from "app/hooks";
import ProfileImage from "assets/vik.png";
import Name from "UI/Name/Name";
import Frame from "UI/Frame/Frame";
import Typing from "UI/Typing/Typing";
import { Button } from "@chakra-ui/react";
import { fileDownload } from "app/thunks/fileDownloadThunk";

const id = process.env.REACT_APP_FILE_ID;

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const sequenceData = [
    "Frontend Developer",
    1000,
    "Backend Developer",
    1000,
    "Fullstack Developer",
    1000,
  ];
  const { darkMode } = useAppSelector((state) => state.theme);
  const { isDownloading } = useAppSelector((state: any) => state.file);
  // useAppSelector((state: any) => console.log(state.file));

  const handleFileDownload = async () => {
    const response = await dispatch(fileDownload({ id, dispatch }));
    console.log(response);
    if (response.type === "download/fulfilled") {
      const link = document.createElement("a");
      link.href = response.payload as string;
      link.download = "CV-Vikram Kumar.pdf";
      link.click();
    }
  };

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
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={handleFileDownload}
            isLoading={isDownloading}
          >
            Download my CV
          </Button>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
