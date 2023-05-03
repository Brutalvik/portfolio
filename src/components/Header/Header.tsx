import { FC, lazy } from "react";
import styles from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { toggleHamburger, toggleTheme } from "app/reducers/theme";
import { Squash as Hamburger } from "hamburger-react";

const DrawerItem = lazy(() => import("UI/Drawer/DrawerItem"));

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { darkMode, hamburgerIsOpen } = useAppSelector((state) => state.theme);
  const toggleThemeIcon = () => {
    import("features/functions").then((module) => {
      module.handleToggle(dispatch, toggleTheme);
    });
  };

  return (
    <div className={styles.container}>
      <div className={hamburgerIsOpen ? styles.menudark : styles.menu}>
        <Hamburger
          onToggle={() => {
            import("features/functions").then((module) => {
              module.handleToggle(dispatch, toggleHamburger);
            });
          }}
          toggled={hamburgerIsOpen}
        />
      </div>
      <div className={styles.theme}>
        {darkMode ? (
          <BsMoonFill onClick={toggleThemeIcon} />
        ) : (
          <BsSunFill onClick={toggleThemeIcon} />
        )}
      </div>
      <div className={styles.drawer}>
        <DrawerItem />
      </div>
    </div>
  );
};

export default Header;
