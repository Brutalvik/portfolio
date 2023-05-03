import { FC, Suspense } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleHamburger } from "app/reducers/theme";
import styles from "./DrawerItem.module.css";

const DrawerItem: FC = () => {
  const dispatch = useAppDispatch();
  const { hamburgerIsOpen } = useAppSelector((state) => state.theme);
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Drawer
        isOpen={hamburgerIsOpen}
        placement="left"
        onClose={() => {
          import("features/functions").then((module) => {
            module.handleToggle(dispatch, toggleHamburger);
          });
        }}
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

          <DrawerFooter textAlign="left">
            Copyright 2023 &copy; Vikram Kumar&reg;
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Suspense>
  );
};

export default DrawerItem;
