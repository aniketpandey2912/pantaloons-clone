import { Flex, Skeleton } from "@chakra-ui/react";
import React from "react";

type Props = {};

const SingleProductSkeleton = (props: Props) => {
  return (
    <Flex w="70%" padding="6">
      <Skeleton height="400px" bgColor="gray" />
      <Skeleton height="600px" bgColor="gray" />
    </Flex>
  );
};

export default SingleProductSkeleton;
