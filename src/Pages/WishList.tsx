import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import EmptyWishlist from "../components/EmptyWishlist";
import { Box, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { getCartProductsApi } from "../redux/carts/carts.actions";
import CartSkeleton from "../components/CartSkeleton";
import CartProductCard from "../components/CartProductCard";
import CartDetails from "../components/CartDetails";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

type Props = {};

const WishList = (props: Props) => {
  const { data, loading } = useAppSelector((store) => store.cartManager);
  const { token } = useAppSelector((store) => store.authManager);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartProductsApi(token)).then(() => {
      // console.log(data);
    });
  }, [dispatch, token]);
  return (
    <Box w="100%" py="50px">
      {loading === false && data?.length === 0 && <EmptyWishlist />}

      {data.length && (
        <>
          <VStack>
            <Heading fontStyle={"italic"} fontWeight="none" fontSize="24px">
              MY WHISTLIST
            </Heading>
            <Text>{data.length} Products</Text>
          </VStack>
          <Flex
            py="10px"
            border="0px solid green"
            w={{ base: "95%", sm: "95%", md: "95%", lg: "80%", xl: "70%" }}
            m="auto"
            justifyContent={{ base: "center", sm: "space-around" }}
            alignItems={{ base: "center", sm: "flex-start" }}
            gap="10px"
            flexDir={{ base: "column-reverse", sm: "row" }}
          >
            {loading ? (
              <ProductSkeleton />
            ) : (
              <SimpleGrid
                border="0px solid black"
                columns={{ base: 1, sm: 2, md: 3 }}
                spacing={2}
              >
                {data?.map((el: any) => (
                  <Box key={el._id}>
                    <ProductCard {...el} />
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </Flex>
        </>
      )}
    </Box>
  );
};

export default WishList;
