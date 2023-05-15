import { FC, useState } from "react";
import styles from "./Register.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomInput from "UI/CustomInput/CustomInput";
import { registrationFormSchema } from "features/validation";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { register } from "app/thunks/userRegistrationThunk";
import Recaptcha from "UI/Recaptcha/Recaptcha";
import { userRegisterReset } from "app/reducers/register";

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const [requestId, setRequestId] = useState(null);
  const { message } = useAppSelector((state) => state.register);

  const onSubmit = (values: any) => {
    dispatch(userRegisterReset());
    const { requestId } = dispatch(register({ values, dispatch }));
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      token: "",
    },
    validationSchema: registrationFormSchema,
    onSubmit,
  });

  const getToken = (token: string) => {
    setFieldValue("token", token);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <CustomInput
          formLabel="First Name"
          name="firstName"
          tooltipLabel="Enter your first name."
          type="text"
          size="md"
          variant="flushed"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.firstName && touched.firstName}
          touched={touched.firstName}
          errorMessage={errors.firstName}
        />
        <CustomInput
          formLabel="Last Name"
          name="lastName"
          tooltipLabel="Enter your Last name."
          type="text"
          size="md"
          variant="flushed"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.lastName && touched.lastName}
          touched={touched.lastName}
          errorMessage={errors.lastName}
        />
        <CustomInput
          formLabel="Email"
          name="email"
          tooltipLabel="Enter your email."
          type="text"
          size="md"
          variant="flushed"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.email && touched.email}
          touched={touched.email}
          errorMessage={errors.email}
        />
        <FormControl
          className={styles.item}
          isInvalid={(errors.password && touched.password) || false}
        >
          <FormLabel>Password</FormLabel>
          <Tooltip label="Create a password with atleast 5 characters.">
            <InputGroup size="md">
              <Input
                type={visible ? "text" : "password"}
                name="password"
                size="md"
                variant="flushed"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
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
            //   onClick={handleFileDownload}
            isLoading={message ? false : isSubmitting}
            size="lg"
            type="submit"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
