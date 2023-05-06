import { FC, useState } from "react";
import styles from "./Register.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  RadioGroup,
  HStack,
  Radio,
  InputRightElement,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomInput from "UI/CustomInput/CustomInput";

const Register: FC = () => {
  const [visible, setVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.container}>
      <FormControl>
        <CustomInput
          formLabel="First Name"
          tooltipLabel="Enter your first name."
          type="text"
          size="md"
          variant="flushed"
          id="firstName"
        />
        <CustomInput
          formLabel="Last Name"
          tooltipLabel="Enter your Last name."
          type="text"
          size="md"
          variant="flushed"
          id="lastName"
        />
        <CustomInput
          formLabel="Email"
          tooltipLabel="Enter your email."
          type="text"
          size="md"
          variant="flushed"
          id="email"
        />
        <div className={styles.item}>
          <FormLabel>Password</FormLabel>
          <Tooltip label="Create a password with atleast 4 characters.">
            <InputGroup size="md">
              <Input
                type={visible ? "text" : "password"}
                size="md"
                variant="flushed"
                id="password"
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
          <FormErrorMessage>We'll never share your email.</FormErrorMessage>
        </div>
        <div className={styles.item}>
          <RadioGroup defaultValue="Male">
            <HStack spacing="24px">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </HStack>
          </RadioGroup>
        </div>
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
      </FormControl>
    </div>
  );
};

export default Register;
