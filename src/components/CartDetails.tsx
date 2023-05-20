import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Tr,
} from "@chakra-ui/react";
import { useAppSelector } from "../redux/store";

type Props = {};

const CartDetails = (props: Props) => {
  const { data } = useAppSelector((store) => store.cartManager);
  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  console.log(data);

  useEffect(() => {
    let sum = 0;
    let disc = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].Price * data[i].qty;
      console.log(data[i].Discount);
      if (data[i].Discount !== null) {
        disc +=
          (Math.floor(
            ((data[i].Discount.Amount || 0) / data[i].Price) * 10000
          ) +
            data[i].Price) *
          data[i].qty;
      }
    }
    setTotal(sum);
    setDiscount(sum - disc);
  }, []);

  return (
    <Box>
      <Box bgColor="rgb(255, 201, 41)" borderRadius="10px">
        <Text fontSize="xs" w="70%" m="auto" py="5px">
          All India <b>FREE</b> shipping on orders above Rs. 1000
        </Text>
      </Box>
      <Box py="20px">
        <Text textAlign="left">Order Summary ({data?.length} item)</Text>

        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>Bag Total</Td>
                <Td>Rs. {total}</Td>
              </Tr>
              <Tr>
                <Td>Discounts</Td>
                <Td>Rs. {discount}</Td>
              </Tr>
              <Tr>
                <Td>
                  Shipping Charges* <Text fontSize="xs">*Non Refundable</Text>
                </Td>
                <Td>Rs. 100</Td>
              </Tr>
              <Tr>
                <Th>Total Payable Amount</Th>
                <Th>Rs. {total}</Th>
              </Tr>
              <Tr>
                <Th>My Savings</Th>
                <Th>Rs. {discount}</Th>
              </Tr>
            </Tbody>
            <Tfoot textAlign="center" border="0px solid black">
              <Box py="20px">
                <Heading ml="50%" border="0px solid red" size="md">
                  Rs. {total}.00
                </Heading>
                <Text ml="50%" fontSize="14px" border="0px solid red">
                  (including Taxes)
                </Text>
                <Button colorScheme="teal" w="100%" ml="25%">
                  CHECKOUT
                </Button>
              </Box>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CartDetails;
