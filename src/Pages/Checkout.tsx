import React from "react";
import {
  Box,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const Checkout = (props: any) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const openModal = () => {
    setOverlay(<OverlayOne />);
    onOpen();
  };

  return (
    <>
      <Button
        w="100%"
        size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
        bgColor="#00c2c8"
        color="white"
        onClick={openModal}
      >
        Checkout
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Pay Securely</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Contact Info</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Checkout;
