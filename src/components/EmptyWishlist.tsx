import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const EmptyWishlist = (props: Props) => {
  return (
    <VStack>
      <Heading fontStyle={"italic"} fontWeight="none" fontSize="24px">
        MY WHISTLIST
      </Heading>
      <Text>No Wishlisted Items</Text>
    </VStack>
  );
};

export default EmptyWishlist;
