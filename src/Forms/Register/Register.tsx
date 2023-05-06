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
        <Input type="text" size="md" variant="flushed" id="firstName" />
        <FormErrorMessage>We'll never share your email.</FormErrorMessage>
        <FormLabel>Last Name</FormLabel>
        <Input type="text" size="md" variant="flushed" id="lastName" />
        <FormErrorMessage>We'll never share your email.</FormErrorMessage>
        <FormLabel>Email address</FormLabel>
        <Input type="email" size="md" variant="flushed" id="email" />
        <FormErrorMessage>We'll never share your email.</FormErrorMessage>
        <FormLabel>Password</FormLabel>
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
