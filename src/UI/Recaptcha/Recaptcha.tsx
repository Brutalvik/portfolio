import { FC, createRef, useEffect, useRef } from "react";
import { IRecaptchaProps } from "features/interfaces";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Recaptcha.module.css";
import { isNull } from "lodash";

const Recaptcha: FC<IRecaptchaProps> = ({ onChange, requestId, theme }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    !isNull(recaptchaRef.current) && recaptchaRef.current.reset();
  }, [requestId]);

  return (
    <div className={styles.container}>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.REACT_APP_GOOGLE_CATPCHA_SITE_KEY as string}
        onChange={onChange}
        theme={theme}
      />
    </div>
  );
};

export default Recaptcha;
