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
import { useAppSelector } from "app/hooks";

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
  const { darkMode } = useAppSelector((state) => state.theme);
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
          borderColor={darkMode ? "#171923" : "#dbe0e6"}
        />
      </Tooltip>
      {touched && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomInput;
