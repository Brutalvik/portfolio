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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
        <FormLabel>First Name</FormLabel>
        <Tooltip label="Enter your first name.">
          <Input type="text" size="md" variant="flushed" id="firstName" />
        </Tooltip>
        <FormErrorMessage>test</FormErrorMessage>
        <FormLabel>Last Name</FormLabel>
        <Tooltip label="Enter your Last name.">
          <Input type="text" size="md" variant="flushed" id="lastName" />
        </Tooltip>
        <FormErrorMessage>We'll never share your email.</FormErrorMessage>

        <FormLabel>Email address</FormLabel>
        <Tooltip label="Enter your email address.">
          <Input type="email" size="md" variant="flushed" id="email" />
        </Tooltip>
        <FormErrorMessage>We'll never share your email.</FormErrorMessage>
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
        <RadioGroup defaultValue="Male">
          <HStack spacing="24px">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
            <Radio value="Other">Other</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Register;
