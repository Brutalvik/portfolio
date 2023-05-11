import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registrationFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Miniumum 3 characters")
    .required("Required !"),
  lastName: yup.string().min(3, "Miniumum 3 characters").required("Required !"),
  email: yup
    .string()
    .email("Please enter a valid email !")
    .required("Required !"),
  password: yup
    .string()
    .min(5, "Must be atleast 5 characters !")
    .matches(passwordRules, {
      message: "Min 5 characters, 1 uppercase, 1 lowercase and 1 number !",
    })
    .required("Required !"),
  token: yup.string().required("Prove that you are a human ?"),
});

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email !")
    .required("Required !"),
  password: yup.string().required("Required !"),
  token: yup.string().required("Prove that you are a human ?"),
});

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name should be minimum of 3 characters !")
    .required("Required !"),
  email: yup
    .string()
    .email("Please enter a valid email !")
    .required("Required !"),
  phone: yup.string().required("Required !"),
  message: yup.string().required("Required"),
  token: yup.string().required("Prove that you are a human ?"),
});
