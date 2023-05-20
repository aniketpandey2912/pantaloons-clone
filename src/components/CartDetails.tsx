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
import React from "react";
import { useAppSelector } from "../redux/store";

type Props = {};

const CartDetails = (props: Props) => {
  const { data } = useAppSelector((store) => store.cartManager);
  return (
    <Box>
      <Box bgColor="rgb(255, 201, 41)" borderRadius="10px">
        <Text fontSize="xs">
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
                <Td>Rs. 1399</Td>
              </Tr>
              <Tr>
                <Td>Discounts</Td>
                <Td>Rs. 770</Td>
              </Tr>
              <Tr>
                <Td>
                  Shipping Charges* <Text fontSize="xs">*Non Refundable</Text>
                </Td>
                <Td>Rs. 100</Td>
              </Tr>
              <Tr>
                <Th>Total Payable Amount</Th>
                <Th>Rs. 729</Th>
              </Tr>
              <Tr>
                <Th>My Savings</Th>
                <Th>Rs. 770</Th>
              </Tr>
            </Tbody>
            <Tfoot textAlign="center" border="0px solid black">
              <Box py="20px">
                <Heading ml="50%" border="0px solid red" size="md">
                  Rs. 729
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
