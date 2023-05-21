import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

type Props = {};

const CartSkeleton = (props: Props) => {
  return (
    <SimpleGrid
      border="0px solid black"
      w={{ base: "90%", sm: "60%", md: "50%", lg: "60%" }}
      columns={1}
      spacing={5}
    >
      <Skeleton>
        <Box w="300px" h="200px"></Box>
      </Skeleton>
      <Skeleton>
        <Box w="300px" h="200px"></Box>
      </Skeleton>
    </SimpleGrid>
  );
};

export default CartSkeleton;
