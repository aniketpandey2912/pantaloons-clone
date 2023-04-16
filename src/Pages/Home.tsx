import React from "react";
import CustomCarousel from "../components/Carousel";
import { Box } from "@chakra-ui/react";

const home_images: { id: number | string; img: string }[] = [
  {
    id: 1,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/apr-2023/week3/SMU-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 2,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/apr-2023/week3/SpringCollection-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 3,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/apr-2023/week3/NPT-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 4,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/apr-2023/week3/Kidswear-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 5,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/apr-2023/week3/Kidswear-D.jpg.transform/i1680x550/image.jpeg",
  },
];

const Home = () => {
  return (
    <Box w="100%">
      <CustomCarousel images={home_images} />
    </Box>
  );
};

export default Home;
