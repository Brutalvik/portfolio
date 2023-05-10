import { FC, useEffect, useState } from "react";
import Information from "UI/Information/Information";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleRegiserModal } from "app/reducers/theme";
import Register from "Forms/Register/Register";
import { INFO } from "features/constants";
import { useNavigate } from "react-router-dom";

const Portfolio: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { registerModal } = useAppSelector((state) => state.theme);
  const [warning, setWarning] = useState(true);
  const [information, setInformation] = useState(INFO);

  const onClickRegister = () => {
    dispatch(toggleRegiserModal(true));
  };

  const handleClose = () => {
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
    dispatch(toggleRegiserModal(false));
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
      />
      {registerModal && (
        <Information
          isopen={registerModal}
          onclose={() => dispatch(toggleRegiserModal(false))}
          title="Register"
          content={<Register />}
        />
      )}
    </div>
  );
};

export default Portfolio;
