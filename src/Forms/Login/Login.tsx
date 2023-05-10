import { FC, useState } from "react";
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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomInput from "UI/CustomInput/CustomInput";
import { loginFormSchema } from "features/registrationValidation";

const onSubmit = (values: any) => {
  console.log(values);
};

const Login: FC = () => {
  const [visible, setVisible] = useState(false);
  const { values, handleBlur, handleSubmit, errors, touched, handleChange } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginFormSchema,
      onSubmit,
    });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
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
          <Tooltip label="Create a password with atleast 4 characters.">
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
        <div className={styles.btn}>
          <Button
            colorScheme="teal"
            variant="solid"
            //   onClick={handleFileDownload}
            //   isLoading={isDownloading}
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
