import { FC } from "react";
import styles from "./CustomInput.module.css";
import { CustomInputInterface } from "features/interfaces";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Tooltip,
} from "@chakra-ui/react";

const CustomInput: FC<CustomInputInterface> = ({
  value,
  formLabel,
  tooltipLabel,
  type,
  size,
  variant,
  id,
  errorMessage,
  onChange,
  onBlur,
  isInvalid,
  touched,
  name,
}) => {
  return (
    <FormControl isInvalid={isInvalid} className={styles.item}>
      <FormLabel>{formLabel}</FormLabel>
      <Tooltip label={tooltipLabel}>
        <Input
          type={type}
          size={size}
          variant={variant}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
      </Tooltip>
      {touched && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomInput;
