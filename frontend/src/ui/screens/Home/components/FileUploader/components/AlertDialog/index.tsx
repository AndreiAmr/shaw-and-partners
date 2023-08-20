import {
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  AlertDialog as ChakraAlertDialog,
} from "@chakra-ui/react";
import { useRef } from "react";

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  filename: string;
  onConfirm: () => void;
}

const AlertDialog = ({
  isOpen,
  onClose,
  filename,
  onConfirm,
}: AlertDialogProps) => {
  const buttonCancel = useRef(null);

  return (
    <ChakraAlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={buttonCancel}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {filename}
          </AlertDialogHeader>

          <AlertDialogBody>
            Is this archive you want to import ?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={buttonCancel} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" ml={3} onClick={onConfirm}>
              Import
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </ChakraAlertDialog>
  );
};

export default AlertDialog;
