import React, { useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import {
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
} from "@chakra-ui/react";

const CartProductCard = ({ ...prod }) => {
  const {
    imageURL: img,
    DefaultCategoryName: brand,
    Price,
    qty,
    Color,
    Discount,
  } = prod;
  const [count, setCount] = useState<number>(qty);

  const handleQuantity = (val: "INC" | "DEC") => {
    if (val === "INC") setCount((prev) => prev + 1);
    else setCount((prev) => prev - 1);
  };

  return (
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
        <Image src={img} w={{ base: "80px", md: "90px" }} borderRadius="10px" />
        <Flex
          justifyContent="center"
          alignItems="center"
          border="0px solid black"
        >
          <Box p="10px">
            <Text>{brand}</Text>
            <Text>{Color}</Text>
            <Text>Rs. {Price * count}</Text>
            <Text textDecoration="line-through">
              Rs.
              {(Discount &&
                Math.floor(((Discount.Amount || 0) / Price) * 10000) + Price) *
                count}
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
        <Button
          size="sm"
          colorScheme="pink"
          onClick={() => handleQuantity("INC")}
        >
          Remove
        </Button>
      </Flex>
    </Card>
  );
};

export default CartProductCard;
