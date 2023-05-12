import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

type Props = {};

const ProductSkeleton = (props: Props) => {
  return (
    <SimpleGrid
      w={{ base: "80%", sm: "70%", md: "80%", lg: "70%" }}
      minChildWidth={{
        base: "180px",
        sm: "200px",
        md: "220px",
        lg: "250px",
      }}
      m="auto"
      spacing={10}
    >
      <Skeleton>
        <Box w="300px" h="400px"></Box>
      </Skeleton>
      <Skeleton>
        <Box w="300px" h="400px"></Box>
      </Skeleton>
      <Skeleton>
        <Box w="300px" h="400px"></Box>
      </Skeleton>
    </SimpleGrid>
  );
};

export default ProductSkeleton;
