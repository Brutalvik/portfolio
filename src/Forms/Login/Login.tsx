import { FC, useEffect, useState } from "react";
import styles from "./Login.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomInput from "UI/CustomInput/CustomInput";
import { loginFormSchema } from "features/validation";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { loginUser } from "app/thunks/userLoginThunk";
import { userLoginReset } from "app/reducers/login";
import Recaptcha from "UI/Recaptcha/Recaptcha";
import useDidMountEffect from "customHooks/useDidMountEffect";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [visible, setVisible] = useState(false);
  const [requestId, setRequestId] = useState(null);

  const { message, isLoggedIn } = useAppSelector((state) => state.login);

  const onSubmit = (values: any) => {
    dispatch(userLoginReset());
    const { requestId } = dispatch(loginUser({ values, dispatch }));
    setRequestId(requestId as any);
  };

  const {
    values,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    handleChange,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      token: "",
    },
    validationSchema: loginFormSchema,
    onSubmit,
  });

  const getToken = (token: string) => {
    setFieldValue("token", token);
  };

  useDidMountEffect(() => {
    message !== "" &&
      !isLoggedIn &&
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
  }, [requestId, message]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <CustomInput
          formLabel="Email"
          name="email"
          tooltipLabel="Enter your email"
          type="text"
          size="md"
          variant="flushed"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.email && touched.email}
          touched={touched.email}
          errorMessage={errors.email}
          borderColor="#CBD5E0"
        />
        <FormControl
          className={styles.item}
          isInvalid={(errors.password && touched.password) || false}
        >
          <FormLabel>Password</FormLabel>
          <Tooltip label="Enter your password">
            <InputGroup size="md">
              <Input
                type={visible ? "text" : "password"}
                name="password"
                size="md"
                variant="flushed"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                borderColor="#CBD5E0"
              />

              <InputRightElement width="3rem">
                {visible ? (
                  <AiOutlineEye onClick={() => setVisible(false)} />
                ) : (
                  <AiOutlineEyeInvisible onClick={() => setVisible(true)} />
                )}
              </InputRightElement>
            </InputGroup>
          </Tooltip>
          {touched.password && (
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <Recaptcha
            onChange={(token) => getToken(token as string)}
            requestId={requestId}
          />

          {errors.token && touched.token && (
            <p className={styles.error}>{errors.token}</p>
          )}
        </FormControl>
        <div className={styles.btn}>
          <Button
            colorScheme="teal"
            variant="solid"
            isLoading={message ? false : isSubmitting}
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
