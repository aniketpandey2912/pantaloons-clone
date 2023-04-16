import { Box } from "@chakra-ui/react";
import React from "react";
import CustomCarousel from "../components/Carousel";

const accessories_image: { id: number | string; img: string }[] = [
  {
    id: 1,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/accessories/Accessories-B3G3-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 2,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/accessories/Shoes-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 3,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/categorypage/fy-2023-2024/april-2023/week-3/accessories/Bags-D.jpg.transform/i1680x550/image.jpeg",
  },
];

const Accessories = () => {
  return (
    <Box w="100%">
      <CustomCarousel images={accessories_image} />
    </Box>
  );
};

export default Accessories;
