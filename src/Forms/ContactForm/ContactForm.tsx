import { FC, useState } from "react";
import styles from "./ContactForm.module.css";
import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import CustomInput from "UI/CustomInput/CustomInput";
import { contactFormSchema } from "features/validation";
import { useAppDispatch } from "app/hooks";
import Recaptcha from "UI/Recaptcha/Recaptcha";

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const [captchaToken, setCaptchaToken] = useState<string>();

  const onSubmit = async (values: any) => {
    console.log(values);
  };

  const {
    values,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    handleChange,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      token: "",
    },
    validationSchema: contactFormSchema,
    onSubmit,
  });

  const getToken = (token: string) => {
    setFieldValue("token", token);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <CustomInput
          formLabel="Name"
          name="name"
          tooltipLabel="Enter your name."
          type="text"
          size="md"
          variant="flushed"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.name && touched.name}
          touched={touched.name}
          errorMessage={errors.name}
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
        <CustomInput
          formLabel="Phone Number"
          name="phone"
          tooltipLabel="Enter your 10 digit phone number"
          type="text"
          size="md"
          variant="flushed"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.phone && touched.phone}
          touched={touched.phone}
          errorMessage={errors.phone}
        />
        <CustomInput
          formLabel="Message"
          name="message"
          tooltipLabel="Enter your message."
          type="textbox"
          size="md"
          variant="flushed"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={errors.message && touched.message}
          touched={touched.message}
          errorMessage={errors.message}
        />
        <Recaptcha onChange={(token) => getToken(token as string)} />
        <div className={styles.btn}>
          <Button
            colorScheme="teal"
            variant="solid"
            isLoading={isSubmitting}
            size="lg"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
