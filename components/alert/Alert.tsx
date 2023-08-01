import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const AlertMessageType = {
  ERROR: "Error",
  SUCCESS: "Success",
  WARNING: "Warning",
};

function AlertMessage(message: any): any {
  console.log(11111, message);

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  switch (message.message) {
    case AlertMessageType.ERROR:
      return (
        <>
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        </>
      );
    case AlertMessageType.SUCCESS:
      return (
        <>
          <Alert status="success">
            <AlertIcon />
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your application has been received. We will review your
                application and respond within the next 48 hours.
              </AlertDescription>
            </Box>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        </>
      );
    case AlertMessageType.WARNING:
      return (
        <>
          <Alert status="warning">
            <AlertIcon />
            Seems your account is about expire, upgrade now
          </Alert>
        </>
      );
  }
}

export default AlertMessage;
