import { FC } from "react";
import { IRecaptchaProps } from "features/interfaces";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Recaptcha.module.css";

const Recaptcha: FC<IRecaptchaProps> = ({ onChange }) => {
  return (
    <div className={styles.container}>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_GOOGLE_CATPCHA_SITE_KEY as string}
        onChange={onChange}
      />
    </div>
  );
};

export default Recaptcha;
