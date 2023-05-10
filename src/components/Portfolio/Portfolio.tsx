import { FC, useEffect, useState } from "react";
import Information from "components/Information/Information";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleRegiserModal } from "app/reducers/theme";
import Register from "Forms/Register/Register";

const Portfolio: FC = () => {
  const dispatch = useAppDispatch();
  const { registerModal } = useAppSelector((state) => state.theme);
  const [warning, setWarning] = useState(true);

  const onClickRegister = () => {
    dispatch(toggleRegiserModal(true));
  };

  useEffect(() => {
    dispatch(toggleRegiserModal(false));
  }, []);

  return (
    <div>
      <Information
        isopen={warning}
        onclose={() => setWarning(false)}
        title="Information"
        content="To view my portfolio, you must register if you are a new user or you can choose to login"
        onclick={onClickRegister}
        buttonName="Register"
        btnColorScheme="teal"
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
