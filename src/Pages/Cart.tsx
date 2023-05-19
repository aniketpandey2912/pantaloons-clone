import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import EmptyCart from "../components/EmptyCart";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { getCartProductsApi } from "../redux/carts/carts.actions";

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
    <Box py="50px">
      {data.length === 0 && <EmptyCart />}

      {loading ? (
        <ProductSkeleton />
      ) : (
        <SimpleGrid
          // border="1px solid black"
          w={{ base: "80%", sm: "70%", md: "80%", lg: "70%" }}
          minChildWidth={{
            base: "180px",
            sm: "200px",
            md: "220px",
            lg: "250px",
          }}
          m="auto"
          spacing={10}
        >
          {data?.map((el: any) => (
            <Box key={el._id}>
              <ProductCard
                id={el._id}
                img={el.imageURL}
                brand={el.DefaultCategoryLinkRewrite}
                price={el.Price}
              />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Cart;
