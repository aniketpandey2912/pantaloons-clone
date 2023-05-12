import React, { useEffect } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import CustomCarousel from "../components/Carousel";
import RectangleCards from "../components/RectangleCards";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getProductsApi } from "../redux/products/products.actions";
import ProductSkeleton from "../components/ProductSkeleton";

const kids_images: { id: number | string; img: string }[] = [
  {
    id: 1,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/kids/Kids-B3G3-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 2,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/kids/KidsSpringWear-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 3,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/kids/SMU-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 4,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/kids/Kids-PriceDrop-D.jpg.transform/i1680x550/image.jpeg",
  },
];

const rectangle_images: { id: number | string; img: string; title: string }[] =
  [
    {
      id: 101,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/Spring-Kids-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Spring'23 Collection",
    },
    {
      id: 102,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/nov'22/kids/0-2-Kids.jpg.transform/i207x146/image.jpeg",
      title: "0-2 Years",
    },
    {
      id: 103,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/nov'22/kids/2-5-Kids.jpg.transform/i207x146/image.jpeg",
      title: "2-5 Years",
    },
    {
      id: 104,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/nov'22/kids/5-8-Kids.jpg.transform/i207x146/image.jpeg",
      title: "5-8 Years",
    },
    {
      id: 105,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/nov'22/kids/8-10-Kids.jpg.transform/i207x146/image.jpeg",
      title: "8-10 Years",
    },
    {
      id: 106,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/nov'22/kids/10-16-Kids.jpg.transform/i207x146/image.jpeg",
      title: "10-16 Years",
    },
    {
      id: 107,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/kids/Kids-OnlineOnly-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Online Exclusives",
    },
  ];

const Kids = () => {
  const { data, loading } = useAppSelector((store) => store.productsManager);
  const { token } = useAppSelector((store) => store.authManager);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsApi("products/kids", token)).then(() => {
      console.log(data);
    });
  }, []);
  return (
    <Box w="100%">
      <CustomCarousel images={kids_images} />
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
        {rectangle_images?.map((el) => (
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
              <ProductCard
                img={el.imageURL}
                brand={el.brand}
                price={el.Price}
              />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Kids;
