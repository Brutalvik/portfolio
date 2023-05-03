import { FC } from "react";
import styles from "./Header.module.css";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { toggleTheme } from "app/reducers/theme";
import { handleThemeChange } from "features/functions";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  return (
    <div className={styles.container}>
      <div className={styles.theme}>
        {darkMode ? (
          <BsMoonFill
            onClick={() => handleThemeChange(dispatch, toggleTheme)}
          />
        ) : (
          <BsSunFill onClick={() => handleThemeChange(dispatch, toggleTheme)} />
        )}
      </div>
    </div>
  );
};

export default Header;
