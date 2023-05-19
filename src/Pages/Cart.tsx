import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import EmptyCart from "../components/EmptyCart";
import ProductSkeleton from "../components/ProductSkeleton";
import { getCartProductsApi } from "../redux/carts/carts.actions";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  const { data, loading } = useAppSelector((store) => store.cartManager);
  const { token } = useAppSelector((store) => store.authManager);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartProductsApi(token)).then(() => {
      // console.log(data);
    });
  }, []);
  return (
    <Box w="100%" py="50px">
      {data.length === 0 && <EmptyCart />}

      <Flex
        border="5px solid green"
        w={{ base: "95%", sm: "95%", md: "95%", lg: "80%", xl: "70%" }}
        m="auto"
        justifyContent={{ base: "center", sm: "space-around" }}
        alignItems={{ base: "center", sm: "flex-start" }}
        gap="10px"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Box
          h={{ base: "300px", md: "400px" }}
          w={{ base: "90%", sm: "45%", md: "45%", lg: "40%" }}
          bgColor="pink"
          textAlign="center"
          position={{ base: "static", sm: "sticky" }}
          top={{ base: "none", sm: "80px" }}
        >
          <Heading size="md">Cart Details</Heading>
        </Box>
        {loading ? (
          <ProductSkeleton />
        ) : (
          <SimpleGrid
            border="1px solid black"
            w={{ base: "90%", sm: "60%", md: "50%", lg: "60%" }}
            columns={1}
            // m="auto"
            spacing={5}
          >
            {data?.map((el: any) => (
              <Box key={el._id}>
                <CartProductCard {...el} />
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Flex>
    </Box>
  );
};

export default Cart;
