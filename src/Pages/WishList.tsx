import React from "react";
import { useAppSelector } from "../redux/store";
import EmptyWishlist from "../components/EmptyWishlist";
import { Box } from "@chakra-ui/react";

type Props = {};

const WishList = (props: Props) => {
  const { data } = useAppSelector((store) => store.cartManager);
  return <Box py="50px">{data.length === 0 && <EmptyWishlist />}</Box>;
};

export default WishList;
