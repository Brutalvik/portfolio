import { Button } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { logoutUser } from "app/thunks/userLogoutThunk";
import { LoginDataInterface } from "features/interfaces";
import { FC, useEffect, useState, lazy } from "react";
import { useNavigate } from "react-router-dom";

const AlertDialoge = lazy(() => import("UI/AlertDialoge/AlertDialoge"));

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
      Welcome {firstName}
      <div>
        <Button colorScheme="teal" onClick={() => setShowAlert(true)}>
          Logout
        </Button>
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
