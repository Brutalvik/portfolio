import { FC } from "react";
import styles from "./Header.module.css";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { toggleHamburger, toggleTheme } from "app/reducers/theme";
import { handleToggle } from "features/functions";
import { Squash as Hamburger } from "hamburger-react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { darkMode, hamburgerIsOpen } = useAppSelector((state) => state.theme);
  const toggleDrawer = () => handleToggle(dispatch, toggleHamburger);

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Hamburger onToggle={toggleDrawer} toggled={hamburgerIsOpen} />
      </div>
      <div className={styles.theme}>
        {darkMode ? (
          <BsMoonFill onClick={() => handleToggle(dispatch, toggleTheme)} />
        ) : (
          <BsSunFill onClick={() => handleToggle(dispatch, toggleTheme)} />
        )}
      </div>
      <div className={styles.drawer}>
        <Drawer
          isOpen={hamburgerIsOpen}
          placement="left"
          onClose={toggleDrawer}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <div className={styles.menuItem}>
                <p>Home</p>
                <p>About</p>
                <p>Skills</p>
                <p>Portfolio</p>
                <p>Contact</p>
              </div>
            </DrawerBody>

            <DrawerFooter textAlign="center">
              Copyright 2023 @Vikram Kumar
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
