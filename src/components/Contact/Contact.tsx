import { FC, Suspense } from "react";
import styles from "./Contact.module.css";
import SpinnerItem from "UI/Spinner/SpinnerItem";

const Contact: FC = () => {
  return <Suspense fallback={<SpinnerItem />}>Contact</Suspense>;
};

export default Contact;
