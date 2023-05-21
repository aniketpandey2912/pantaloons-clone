import React, { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  addCartProductsApi,
  decreaseQtyCartProductsApi,
  deleteCartProductsApi,
  getCartProductsApi,
} from "../redux/carts/carts.actions";

const CartProductCard = ({ ...prod }: any) => {
  const { token } = useAppSelector((store) => store.authManager);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const {
    _id,
    imageURL: img,
    DefaultCategoryName: brand,
    Price,
    qty,
    Color,
    Discount,
  } = prod;
  const [count, setCount] = useState<number>(qty);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<any>();

  const handleQuantity = (val: "INC" | "DEC") => {
    if (val === "INC") {
      setCount((prev) => prev + 1);
      handleIncreaseQty();
    } else {
      setCount((prev) => prev - 1);
      handleDecreaseQty();
    }
  };

  const handleIncreaseQty = () => {
    dispatch(addCartProductsApi(prod, token)).then((res: any) => {
      console.log(res);
      if (res.status === false) {
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      } else {
        dispatch(getCartProductsApi(token));
      }
    });
  };

  const handleDecreaseQty = () => {
    dispatch(decreaseQtyCartProductsApi(prod, token)).then((res: any) => {
      console.log(res);
      if (res.status === false) {
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      } else {
        dispatch(getCartProductsApi(token));
      }
    });
  };

  const handleRemove = () => {
    onClose();
    dispatch(deleteCartProductsApi(_id, token)).then((res: any) => {
      if (res.status) {
        toast({
          title: "Removed Item From Cart",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom",
          colorScheme: "teal",
        });
        dispatch(getCartProductsApi(token));
      } else {
        toast({
          title: "Something Went Wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      }
    });
  };

  return (
    <>
      <Card
        border="0px solid red"
        py="10px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <HStack>
          <Icon as={StarIcon} color="pink" />
          <Text fontStyle="italic">ROCK BOTTOM DEAL</Text>
        </HStack>
        <Divider variant="dashed" color="pink" />

        <Flex
          p="20px"
          gap="2%"
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="wrap"
        >
          <Image
            src={img}
            w={{ base: "80px", md: "90px" }}
            borderRadius="10px"
          />
          <Flex
            justifyContent="center"
            alignItems="center"
            border="0px solid black"
          >
            <Box p="10px">
              <Text>{brand}</Text>
              <Text>{Color}</Text>
              <Text>
                Rs. {Price} x {count}
              </Text>
              <Text textDecoration="line-through">
                Rs.
                {(Discount &&
                  Math.floor(((Discount.Amount || 0) / Price) * 10000) +
                    Price) * count}
              </Text>
            </Box>
          </Flex>
          <HStack border="0px solid black">
            <Text fontSize="14px">Size:</Text>
            <Select size="sm" border="none" fontWeight="bold">
              <option value="option1">S</option>
              <option value="option1">XS</option>
              <option value="option2">X</option>
              <option value="option3">M</option>
              <option value="option3">L</option>
              <option value="option3">XL</option>
            </Select>
            <Button
              isDisabled={count === 1}
              size="xs"
              colorScheme="pink"
              onClick={() => handleQuantity("DEC")}
            >
              -
            </Button>
            <Text fontSize="14px">Qty: </Text>
            <Text fontWeight="bold">{count}</Text>
            <Button
              size="xs"
              colorScheme="pink"
              onClick={() => handleQuantity("INC")}
            >
              +
            </Button>
          </HStack>
          <Button size="sm" colorScheme="pink" onClick={onOpen}>
            Remove
          </Button>
        </Flex>
      </Card>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Item
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleRemove} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CartProductCard;
