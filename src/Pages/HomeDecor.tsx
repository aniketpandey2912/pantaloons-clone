import React, { useEffect } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getProductsApi } from "../redux/products/products.actions";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

const HomeDecor = () => {
  const { data, loading } = useAppSelector((store) => store.productsManager);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsApi("products/homedecors")).then(() => {
      console.log(data);
    });
  }, []);
  return (
    <Box w="100%">
      <Heading
        // color="teal.400"
        textAlign="center"
        my="10px"
        size={{ base: "md", sm: "md", md: "md", lg: "lg" }}
      >
        Home Decoratives
      </Heading>
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
              <ProductCard {...el} />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default HomeDecor;
