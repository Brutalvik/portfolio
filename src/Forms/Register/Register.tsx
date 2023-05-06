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
import { registrationFormSchema } from "features/registrationValidation";

const Register: FC = () => {
  const [visible, setVisible] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      validationSchema: registrationFormSchema,
      onSubmit: (values: any) => {
        console.log(values);
      },
    });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <CustomInput
          formLabel="First Name"
          tooltipLabel="Enter your first name."
          type="text"
          size="md"
          variant="flushed"
          id="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.firstName && touched.firstName}
          touched={touched.firstName}
          errorMessage={errors.firstName}
        />
        <CustomInput
          formLabel="Last Name"
          tooltipLabel="Enter your Last name."
          type="text"
          size="md"
          variant="flushed"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.lastName && touched.lastName}
          touched={touched.lastName}
          errorMessage={errors.lastName}
        />
        <CustomInput
          formLabel="Email"
          tooltipLabel="Enter your email."
          type="text"
          size="md"
          variant="flushed"
          id="email"
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
                size="md"
                variant="flushed"
                id="password"
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
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
