import { Box, Image, Text } from "@chakra-ui/react";

const RoundCards = ({ title, img }: { title: string; img: string }) => {
  return (
    <Box textAlign="center">
      <Image src={img} borderRadius="50%" />
      <Text>{title}</Text>
    </Box>
  );
};

export default RoundCards;
