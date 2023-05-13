import React, { useEffect } from "react";
import CustomCarousel from "../components/Carousel";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getProductsApi } from "../redux/products/products.actions";
import RectangleCards from "../components/RectangleCards";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

const men_images: { id: number | string; img: string }[] = [
  {
    id: 1,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/men/Men-B3G3-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 2,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/men/Men-B3G3-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 3,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/men/Men-SMU-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 4,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/men/Men-PriceDrop-D.jpg.transform/i1680x550/image.jpeg",
  },
];

const rectangle_images: { id: number | string; img: string; title: string }[] =
  [
    {
      id: 101,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/Spring-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Spring'23 Collection",
    },
    {
      id: 102,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/Beauty-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Beauty",
    },
    {
      id: 103,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/women/Denims-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Denims",
    },
    {
      id: 104,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/women/Women-OnlineOnly-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Online Exclusives",
    },
    {
      id: 105,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/women/Kurtas-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Kurta & Sets",
    },
    {
      id: 106,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/women/Tops-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Tees & Tops",
    },
  ];

const Men = () => {
  const { data, loading } = useAppSelector((store) => store.productsManager);
  const { token } = useAppSelector((store) => store.authManager);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsApi("products/men", token)).then(() => {
      console.log(data);
    });
  }, []);
  return (
    <Box w="100%">
      <CustomCarousel images={men_images} />
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
              <ProductCard
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

export default Men;
