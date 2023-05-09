import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CustomCarousel from "../components/Carousel";
import RectangleCards from "../components/RectangleCards";
import ProductCard from "../components/ProductCard";

const women_images: { id: number | string; img: string }[] = [
  {
    id: 1,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/woman/Women-B3G3-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 2,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/woman/Women-SpringCollection-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 3,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/woman/Women-SMU-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 4,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/woman/Women-PriceDrop-D.jpg.transform/i1680x550/image.jpeg",
  },
];
const rectangle_images: { id: number | string; img: string; title: string }[] =
  [
    {
      id: 1,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/Spring-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Spring'23 Collection",
    },
    {
      id: 2,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/Beauty-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Beauty",
    },
    {
      id: 3,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/women/Denims-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Denims",
    },
    {
      id: 4,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/women/Women-OnlineOnly-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Online Exclusives",
    },
    {
      id: 5,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/women/Kurtas-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Kurta & Sets",
    },
    {
      id: 6,
      img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/thumbnail/women/Tops-Women-Thumbnail.jpg.transform/i207x146/image.jpeg",
      title: "Tees & Tops",
    },
  ];

const Women = () => {
  return (
    <Box w="100%">
      <CustomCarousel images={women_images} />
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
      <SimpleGrid
        // border="1px solid black"
        w={{ base: "80%", sm: "70%", md: "80%", lg: "70%" }}
        minChildWidth={{ base: "180px", sm: "200px", md: "220px", lg: "250px" }}
        m="auto"
        spacing={10}
      >
        <Box>
          <ProductCard />
        </Box>
        <Box>
          <ProductCard />
        </Box>
        <Box>
          <ProductCard />
        </Box>
        <Box>
          <ProductCard />
        </Box>
        <Box>
          <ProductCard />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Women;
