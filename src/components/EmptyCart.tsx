import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const EmptyCart = (props: Props) => {
  return (
    <VStack>
      <Image src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/icons/empty-cart.svg" />
      <Heading fontStyle={"italic"} fontWeight="none" fontSize="24px">
        Oops!
      </Heading>
      <Text>Its empty in here. Let's find you your fashion fix.</Text>
      <Link to="/">
        <Button
          borderRadius="25px"
          p="25px 20px"
          bgColor="#00c2c8"
          color="white"
          _hover={{ color: "black", bgColor: "white" }}
        >
          EXPLORE
        </Button>
      </Link>
    </VStack>
  );
};

export default EmptyCart;
