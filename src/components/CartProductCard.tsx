import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CartProductCard = ({ ...prod }) => {
  const { imageURL: img, DefaultCategoryLinkRewrite: brand, Price, qty } = prod;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={img}
        alt={brand}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{brand}</Heading>
          <Text py="2">Price : {Price}</Text>
          <Text py="2">Qunatity : {qty}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Remove
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CartProductCard;
