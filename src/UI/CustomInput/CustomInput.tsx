import { FC } from "react";
import styles from "./CustomInput.module.css";
import { CustomInputInterface } from "features/interfaces";
import { FormLabel, FormErrorMessage, Input, Tooltip } from "@chakra-ui/react";

const CustomInput: FC<CustomInputInterface> = ({
  formLabel,
  tooltipLabel,
  type,
  size,
  variant,
  id,
  errorMessage,
}) => {
  return (
    <div className={styles.item}>
      <FormLabel>{formLabel}</FormLabel>
      <Tooltip label={tooltipLabel}>
        <Input type={type} size={size} variant={variant} id={id} />
      </Tooltip>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </div>
  );
};

export default CustomInput;
