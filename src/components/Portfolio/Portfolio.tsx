import { FC, useEffect, useState, lazy, Suspense } from "react";
import Information from "UI/Information/Information";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleLoginModal, toggleRegisterModal } from "app/reducers/theme";
import { INFO } from "features/constants";
import { useNavigate } from "react-router-dom";
import SpinnerItem from "UI/Spinner/SpinnerItem";
import { useToast } from "@chakra-ui/react";
import { userRegisterReset } from "app/reducers/register";
import useDidMountEffect from "customHooks/useDidMountEffect";

const Register = lazy(() => import("Forms/Register/Register"));
const Login = lazy(() => import("Forms/Login/Login"));

const Portfolio: FC = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { registerModal, loginModal } = useAppSelector((state) => state.theme);
  const [warning, setWarning] = useState(true);
  const [information, setInformation] = useState(INFO);
  const [disabled, setDisabled] = useState(false);

  const { isRegistered, message, status } = useAppSelector(
    (state) => state.register
  );
  useAppSelector((state) => console.log(state.register));

  const onClickRegister = () => {
    dispatch(toggleRegisterModal(true));
  };

  const onClickLogin = () => {
    dispatch(toggleLoginModal(true));
  };

  const handleClose = () => {
    setDisabled(true);
    let count = 5;
    const intervalId = setInterval(() => {
      setInformation(`You will be redirect to homepage in ${count} seconds`);
      if (count === 0) {
        clearInterval(intervalId);
        navigate("/");
        setWarning(false);
      } else {
        count--;
      }
    }, 1000);
    return count;
  };

  useEffect(() => {
    dispatch(toggleRegisterModal(false));
    dispatch(toggleLoginModal(false));
    dispatch(userRegisterReset());
  }, []);

  useDidMountEffect(() => {
    if (isRegistered) {
      dispatch(toggleRegisterModal(false));
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Failed",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [status]);

  return (
    <Suspense fallback={<SpinnerItem />}>
      <Information
        isopen={warning}
        onclose={handleClose}
        title="Information"
        content={information}
        onclick={onClickRegister}
        buttonName="Register"
        btnColorScheme="teal"
        variant="outline"
        secondaryButtonName="Login"
        secondaryOnClick={onClickLogin}
        isDisabled={disabled}
      />
      {registerModal && (
        <Information
          isopen={registerModal}
          onclose={() => dispatch(toggleRegisterModal(false))}
          title="Register"
          content={<Register />}
        />
      )}
      {loginModal && (
        <Information
          isopen={loginModal}
          onclose={() => dispatch(toggleLoginModal(false))}
          title="Login"
          content={<Login />}
        />
      )}
    </Suspense>
  );
};

export default Portfolio;
