import { FC, useEffect, useState, lazy } from "react";
import Information from "UI/Information/Information";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleLoginModal, toggleRegisterModal } from "app/reducers/theme";
import { INFO } from "features/constants";
import { useNavigate } from "react-router-dom";

const Register = lazy(() => import("Forms/Register/Register"));
const Login = lazy(() => import("Forms/Login/Login"));

const Portfolio: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { registerModal, loginModal } = useAppSelector((state) => state.theme);
  const [warning, setWarning] = useState(true);
  const [information, setInformation] = useState(INFO);
  const [disabled, setDisabled] = useState(false);

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
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Portfolio;
