import { Spinner } from "@chakra-ui/react";
import { useAppSelector } from "app/hooks";
import { FC } from "react";
import styles from "./SpinnerItem.module.css";

const SpinnerItem: FC<any> = ({ size }) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  return (
    <div className={styles.container}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={darkMode ? "#2c7a7b" : "#4fd1c5"}
        size={size}
      />
    </div>
  );
};

export default SpinnerItem;
