import { FC, Suspense } from "react";
import styles from "./NotFound.module.css";
import SpinnerItem from "UI/Spinner/SpinnerItem";
import Typing from "UI/Typing/Typing";
import { notFoundData } from "features/constants";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<SpinnerItem />}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>404 - NOT FOUND</h1>
        </div>
        <div className={styles.text}>
          <Typing sequence={notFoundData} repeat={0} />
        </div>
      </div>
      <div className={styles.footer}>
        <Button colorScheme="teal" size="lg" onClick={() => navigate("/")}>
          Home
        </Button>
      </div>
    </Suspense>
  );
};

export default NotFound;
