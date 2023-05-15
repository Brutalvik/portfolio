import { Button } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { logoutUser } from "app/thunks/userLogoutThunk";
import { LoginDataInterface } from "features/interfaces";
import { FC, useEffect, useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { upperFirst } from "lodash";

const AlertDialoge = lazy(() => import("UI/AlertDialoge/AlertDialoge"));
const TabItem = lazy(() => import("components/TabItem/TabItem"));

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { firstName, id }: LoginDataInterface = useAppSelector(
    (state) => state.login?.data ?? {}
  );
  const { isLoggedIn } = useAppSelector((state) => state.login);

  const [showAlert, setShowAlert] = useState(false);

  const handleLogout = () => {
    setShowAlert(false);
    dispatch(logoutUser({ id, dispatch }));
  };

  useEffect(() => {
    !isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  return (
    <div>
      <div className={styles.header}>
        <span>Welcome {upperFirst(firstName?.toLowerCase())}</span>
        <Button colorScheme="teal" onClick={() => setShowAlert(true)}>
          Logout
        </Button>
      </div>
      <div>
        <TabItem />
      </div>
      <div>
        <AlertDialoge
          header="Logout Confirmation"
          body="Are you sure you want to logout ?"
          onClose={handleLogout}
          isOpen={showAlert}
          onCancel={() => setShowAlert(false)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
