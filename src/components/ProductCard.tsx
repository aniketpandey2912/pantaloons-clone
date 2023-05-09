import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <Card>
      <CardBody color="teal">
        <Image
          src="https://imagescdn.pantaloons.com/img/app/product/7/748945-8457103.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          h={{ base: "240px", sm: "270px" }}
        />
        <Stack mt="3" spacing="1">
          <Heading size="sm">HONEY</Heading>
          <Text>Light Beige Bottoms</Text>
          <Text fontSize="xl">
            Rs 450{" "}
            <span style={{ textDecoration: "line-through", fontSize: "14px" }}>
              Rs. {Math.floor(450 + Math.random() * 1000)}
            </span>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="orange"
            size={{ base: "sm", md: "md" }}
          >
            View more
          </Button>
          <Button
            variant="ghost"
            colorScheme="orange"
            size={{ base: "sm", md: "md" }}
          >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
