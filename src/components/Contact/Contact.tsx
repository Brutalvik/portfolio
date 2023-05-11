import { FC, Suspense, lazy } from "react";
import styles from "./Contact.module.css";
import SpinnerItem from "UI/Spinner/SpinnerItem";

const ContactForm = lazy(() => import("Forms/ContactForm/ContactForm"));
const Map = lazy(() => import("components/Map/Map"));

const Contact: FC = () => {
  return (
    <Suspense fallback={<SpinnerItem />}>
      <div className={styles.container}>
        <div className={styles.leftcolumn}>
          <h1>Contact Me</h1>
          <ContactForm />
        </div>
        <div className={styles.rightcolumn}>
          <h1>Location</h1>
          <Map />
        </div>
      </div>
    </Suspense>
  );
};

export default Contact;
