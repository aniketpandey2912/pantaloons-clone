import { Box } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../redux/store";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { data } = useAppSelector((store) => store.cartManager);
  return <Box py="50px">{data.length === 0 && <EmptyCart />}</Box>;
};

export default Cart;
