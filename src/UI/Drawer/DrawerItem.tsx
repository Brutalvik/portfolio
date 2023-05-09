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
import { useNavigate } from "react-router-dom";
import SpinnerItem from "UI/Spinner/SpinnerItem";

const DrawerItem: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { hamburgerIsOpen } = useAppSelector((state) => state.theme);

  const lazyImport = () =>
    import("features/functions").then((module) => {
      module.handleToggle(dispatch, toggleHamburger);
    });

  const navigatePage = async (page: any) => {
    await lazyImport();
    navigate(page);
  };
  return (
    <Suspense fallback={<SpinnerItem />}>
      <Drawer
        isOpen={hamburgerIsOpen}
        placement="left"
        onClose={lazyImport}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <div className={styles.menuItem}>
              <p onClick={() => navigatePage("/")}>Home</p>
              <p onClick={() => navigatePage("/about")}>About</p>
              <p onClick={() => navigatePage("/portfolio")}>Portfolio</p>
              <p onClick={() => navigatePage("/contact")}>Contact</p>
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
