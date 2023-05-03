import { FC } from "react";
import styles from "./Header.module.css";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { toggleHamburger, toggleTheme } from "app/reducers/theme";
import { handleToggle } from "features/functions";
import { Squash as Hamburger } from "hamburger-react";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { darkMode, hamburgerIsOpen } = useAppSelector((state) => state.theme);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Hamburger
          onToggle={() => handleToggle(dispatch, toggleHamburger)}
          toggled={hamburgerIsOpen}
        />
      </div>
      <div className={styles.theme}>
        {darkMode ? (
          <BsMoonFill onClick={() => handleToggle(dispatch, toggleTheme)} />
        ) : (
          <BsSunFill onClick={() => handleToggle(dispatch, toggleTheme)} />
        )}
      </div>
    </div>
  );
};

export default Header;
