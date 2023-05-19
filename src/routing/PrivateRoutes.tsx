import React, { useEffect } from "react";
import { useAppSelector } from "../redux/store";
import { Link } from "react-router-dom";
import {
  useDisclosure,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

const PrivateRoutes = ({ children }: any) => {
  let { token } = useAppSelector((store) => store.authManager);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  useEffect(() => {
    onOpen();
  }, []);

  if (token) {
    return children;
  } else {
    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          closeOnEsc={false}
          closeOnOverlayClick={false}
          motionPreset="slideInBottom"
          isCentered
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Please Login To Continue !
              </AlertDialogHeader>

              <AlertDialogFooter>
                <Link to="/login">
                  <Button colorScheme="red" onClick={onClose}>
                    OK
                  </Button>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  }
};

export default PrivateRoutes;
