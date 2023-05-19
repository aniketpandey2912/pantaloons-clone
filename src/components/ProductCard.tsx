import React from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  useToast,
} from "@chakra-ui/react";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addCartProductsApi } from "../redux/carts/carts.actions";

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

function ProductCard({ ...prod }: any) {
  const { imageURL: img, DefaultCategoryLinkRewrite: brand, Price } = prod;
  const { token } = useAppSelector((store) => store.authManager);
  const dispatch = useAppDispatch();

  const toast = useToast();

  const data = {
    isNew: true,
    imageURL: img,
    name: brand,
    price: Price,
    rating: 4.2,
  };

  const handleAddToCart = () => {
    console.log(prod);
    dispatch(addCartProductsApi(prod, token)).then((res: any) => {
      console.log(res.status);
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

  return (
    <Flex px={5} py={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          h="400px"
          w="300px"
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                Just In !
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.p
                display={"flex"}
                cursor="pointer"
                onClick={handleAddToCart}
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.p>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                Rs.
              </Box>
              {data.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
