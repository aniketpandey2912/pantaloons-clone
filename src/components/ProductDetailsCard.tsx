import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getProductsByIDApi } from "../redux/products/products.actions";
import { addCartProductsApi } from "../redux/carts/carts.actions";
import SingleProductSkeleton from "./SingleProductSkeleton";

const ProductDetailsCard = () => {
  const { prodID } = useParams();
  const dispatch = useAppDispatch();
  const { singleProd } = useAppSelector((store) => store.productsManager);
  const { token } = useAppSelector((store) => store.authManager);
  const [loading, setLoading] = useState<boolean>(true); // reducer loading not working correct, so taking this loading state
  const [error, setError] = useState<boolean>(false); // reducer error not working correct, so taking this error state

  const toast = useToast();

  // styles
  const textColor = useColorModeValue("gray.900", "gray.400");
  const textColor2 = useColorModeValue("gray.500", "gray.400");
  const textColor3 = useColorModeValue("yellow.500", "yellow.300");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const buttonBgColor = useColorModeValue("gray.900", "gray.50");
  const buttonTextColor = useColorModeValue("white", "gray.900");

  const handleAddToCart = () => {
    dispatch(addCartProductsApi(singleProd, token)).then((res: any) => {
      // console.log(res.status);
      if (res.status) {
        toast({
          title: "Added To Cart",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom",
          colorScheme: "teal",
        });
      } else {
        toast({
          title: "Something Went Wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      }
    });
  };

  useEffect(() => {
    console.log(prodID);
    dispatch(getProductsByIDApi(`${prodID}`)).then((res: any) => {
      console.log("res:", res);
      if (res.status === false) {
        setError(true);
      }
      setLoading(false);
    });
  }, [dispatch, prodID]);

  if (loading) {
    return <SingleProductSkeleton />;
  }

  return (
    <Container maxW={"7xl"}>
      {error ? (
        <VStack py="10px">
          <Heading>Something went wrong...</Heading>
          <Link to="/">
            <Button colorScheme="teal">GoBack</Button>
          </Link>
        </VStack>
      ) : (
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: "8", lg: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={singleProd.imageURL}
              h={{ base: "100%", sm: "400px", md: "500px" }}
              mx="auto"
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {singleProd.MetaTitle}
              </Heading>
              <Text color={textColor} fontWeight={300} fontSize={"2xl"}>
                Rs. {singleProd.Price}.00
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={<StackDivider borderColor={dividerColor} />}
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={textColor2}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                  w={{ base: "100%" }}
                >
                  {singleProd.ShortDescription}
                </Text>
                <Text fontSize={"lg"}>{singleProd.Features.Manufacturer}</Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={textColor3}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>{singleProd.Features.Brand}</ListItem>
                    <ListItem>{singleProd.Features.Color}</ListItem>
                    <ListItem>{singleProd.Features.Fit}</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{singleProd.Features.Neck}</ListItem>
                    <ListItem>{singleProd.Features.Occasion}</ListItem>
                    <ListItem>{singleProd.Features.Pattern}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={textColor3}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Gender:
                    </Text>
                    {singleProd.Gender}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      IsReturnable:
                    </Text>
                    {singleProd.IsReturnable == 1 ? "Yes" : "No"}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Name:
                    </Text>
                    {singleProd.Name}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Price:
                    </Text>
                    {singleProd.Price}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Color:
                    </Text>
                    {singleProd.Color}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={buttonBgColor}
              color={buttonTextColor}
              bgColor="teal.400"
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      )}
    </Container>
  );
};

export default ProductDetailsCard;
