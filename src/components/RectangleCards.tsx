import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  img: string;
  title: string;
};

const RectangleCards = ({ img, title }: Props) => {
  return (
    <Box textAlign="center">
      <Image src={img} borderRadius="10%" w="100%" h="100%" />
      <Text>{title}</Text>
    </Box>
  );
};

export default RectangleCards;
