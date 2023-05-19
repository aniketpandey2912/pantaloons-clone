import React, { useEffect } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import CustomCarousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import RectangleCards from "../components/RectangleCards";
import { getProductsApi } from "../redux/products/products.actions";
import { useAppDispatch, useAppSelector } from "../redux/store";

const accessories_image: { id: number | string; img: string }[] = [
  {
    id: 1,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/may-2023/week-3/accessories/Accessories-SFS-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 2,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/accessories/Accessories-B3G3-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 3,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/accessories/Shoes-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 4,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/accessories/Bags-D.jpg.transform/i1680x550/image.jpeg",
  },
];

const rectangle_images: { id: number | string; img: string; title: string }[] =
  [
    {
      id: 101,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/acc/Womens-Footwear-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Women's Footwear",
    },
    {
      id: 102,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/acc/Mens-Footwear-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Men's Footwear",
    },
    {
      id: 103,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/acc/Kids-Footwear-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Kid's Footwear",
    },
    {
      id: 104,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/acc/Bags-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Bags",
    },
  ];

const Accessories = () => {
  const { data, loading } = useAppSelector((store) => store.productsManager);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsApi("products/accessories")).then(() => {
      console.log(data);
    });
  }, []);
  return (
    <Box w="100%">
      <CustomCarousel images={accessories_image} />
      <Flex
        // border="1px solid black"
        w={{ base: "90%", sm: "90%", md: "70%", lg: "70%" }}
        m="auto"
        py="50px"
        justifyContent="space-around"
        alignItems={{ baee: "center", md: "flex-start" }}
        flexWrap="wrap"
        rowGap="10px"
      >
        {rectangle_images?.map((el: any) => (
          <Box key={el.id} w="120px">
            <RectangleCards img={el.img} title={el.title} />
          </Box>
        ))}
      </Flex>
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

export default Accessories;
