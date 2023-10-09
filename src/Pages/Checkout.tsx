import React, { useState } from "react";
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
  Input,
  Select,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addOrdersApi } from "../redux/orders/orders.actions";
import { OrderProps } from "../redux/orders/ordersTypes";
import { deleteCartAllApi } from "../redux/carts/carts.actions";
import { validation } from "../utils";

interface intiTypeAdderss {
  house: string;
  city: string;
  postalAddress: string;
  state: string;
  country: string;
}
interface intiTypePayment {
  cardno: string;
  pin: string;
  cvv: string;
}

const initStateAddress: intiTypeAdderss = {
  house: "",
  city: "",
  postalAddress: "",
  state: "",
  country: "",
};

const initStatePayment: intiTypePayment = {
  cardno: "",
  pin: "",
  cvv: "",
};

const Checkout = () => {
  const { token } = useAppSelector((store) => store.authManager);
  const { loading } = useAppSelector((store) => store.ordersManager);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [formType, setFormType] = useState("address");
  const [paymentMode, setPaymentMode] = useState<"CashOnDelivery" | "Online">(
    "CashOnDelivery"
  );

  const [formData, setFormData] = useState<intiTypeAdderss>(initStateAddress);
  const [paymentData, setPaymentData] =
    useState<intiTypePayment>(initStatePayment);
  const [error, setError] = useState<boolean | string>(false);

  const handleFormData: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (error) setError(false);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlePaymentData: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (error) setError(false);
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleConfirmOrder = () => {
    let order: OrderProps = {
      payment: { mode: paymentMode, amount: 1500 },
      address: { ...formData },
    };

    if (paymentMode === "Online" && validation(paymentData) === false) {
      setError("All fields are reuired");
      return;
    }
    dispatch(addOrdersApi(order, token)).then((res: any) => {
      console.log(res);
      if (res.status) {
        toast({
          title: "Order Plcaed Sucessfully !",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        dispatch(deleteCartAllApi(token));
      } else {
        toast({
          title: res.mssg,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    });
  };

  const handleNextForm = () => {
    if (validation(formData)) {
      setFormType("paymentmode");
    } else {
      setError("All fields are required");
    }
  };

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
              {formType === "address" && (
                <VStack>
                  {error && <Text color="red">{error}*</Text>}
                  <Text w="100%">Delivery Address</Text>
                  <Input
                    type="text"
                    placeholder="Street/House no."
                    name="house"
                    value={formData.house}
                    onChange={(e) => handleFormData(e)}
                  />
                  <Input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={(e) => handleFormData(e)}
                  />
                  <Input
                    type="text"
                    placeholder="Pin code"
                    name="postalAddress"
                    value={formData.postalAddress}
                    onChange={(e) => handleFormData(e)}
                  />
                  <Input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={(e) => handleFormData(e)}
                  />
                  <Input
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={formData.country}
                    onChange={(e) => handleFormData(e)}
                  />
                </VStack>
              )}
              {formType === "paymentmode" && (
                <>
                  <Text>Select payment method</Text>
                  <Select
                    placeholder="Select payment option"
                    // see explanation below
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setPaymentMode(
                        e.target.value as "CashOnDelivery" | "Online"
                      )
                    }
                  >
                    <option value="CashOnDelivery" selected>
                      Cash on delivery
                    </option>
                    <option value="Online">Online payment</option>
                  </Select>
                  {paymentMode === "Online" && (
                    <VStack w="100%" py="10px">
                      <Text width="100%">Card Details</Text>
                      {error && (
                        <Text textAlign="center" color="red">
                          {error}*
                        </Text>
                      )}
                      <Input
                        type="text"
                        placeholder="card no."
                        name="cardno"
                        onChange={(e) => handlePaymentData(e)}
                      />
                      <Input
                        type="password"
                        placeholder="pin"
                        name="pin"
                        onChange={(e) => handlePaymentData(e)}
                      />
                      <Input
                        type="text"
                        placeholder="cvv"
                        name="cvv"
                        onChange={(e) => handlePaymentData(e)}
                      />
                    </VStack>
                  )}
                </>
              )}
            </Box>
          </ModalBody>
          <ModalFooter>
            {formType === "address" && (
              <Button colorScheme="teal" onClick={handleNextForm}>
                Save & Next
              </Button>
            )}
            {formType === "paymentmode" && (
              <Button
                isLoading={loading}
                colorScheme="teal"
                onClick={handleConfirmOrder}
              >
                Confirm Order
              </Button>
            )}

            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Checkout;

// Explanation
// 1. explicitly specify the type of the event parameter in the onChange handler and convert the value to the expected type.
// 2. In the code, the event parameter is explicitly typed as React.ChangeEvent<HTMLSelectElement>, indicating that it's a change event on an HTML select element. Additionally, the value from e.target.value is asserted as "CashOnDelivery" | "Online" using the as keyword to ensure type compatibility with the setPaymentMode function.
// 3. By explicitly specifying the types and asserting the value type, you should be able to assign the selected payment mode to the paymentMode state variable without encountering a type error.
