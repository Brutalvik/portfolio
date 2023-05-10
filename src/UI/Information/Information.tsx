import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { InformationInterface } from "features/interfaces";
import { isUndefined } from "lodash";

const Information: FC<InformationInterface> = ({
  isopen,
  onclose,
  title,
  content,
  onclick,
  btnColorScheme,
  buttonName,
  variant,
  secondaryButtonName,
}) => {
  return (
    <div>
      <Modal isOpen={isopen} onClose={onclose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>
          <ModalFooter>
            {!isUndefined(buttonName) && (
              <Button colorScheme={btnColorScheme} mr={3} onClick={onclick}>
                {buttonName}
              </Button>
            )}
            {!isUndefined(variant) && (
              <Button variant={variant}>{secondaryButtonName}</Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Information;
