import React from "react";
import CustomCarousel from "../components/Carousel";
import { Box } from "@chakra-ui/react";
import CustomCarousel2 from "../components/Caraousel2";
import MultiCaraousel from "../components/MultiCaraousel";

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

// const newArrivals_images: { id: number | string; img: string }[] = [
//   {
//     id: 1,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/615193-5876972.jpg",
//   },
//   {
//     id: 2,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/615204-5877038.jpg",
//   },
//   {
//     id: 3,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/652898-6610498.jpg",
//   },
//   {
//     id: 4,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/615205-5877044.jpg",
//   },
//   {
//     id: 5,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
//   },
// ];
const caraousel_images: { id: number | string; img: string }[] = [
  {
    id: 1,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/615193-5876972.jpg",
  },
  {
    id: 2,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/615204-5877038.jpg",
  },
  {
    id: 3,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/652898-6610498.jpg",
  },
  {
    id: 4,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/615205-5877044.jpg",
  },
  {
    id: 5,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
  },
  {
    id: 6,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
  },
  {
    id: 7,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
  },
  {
    id: 8,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
  },
  {
    id: 9,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
  },
];

const Home = () => {
  return (
    <Box overflow="hidden">
      <Box w="100%">
        <CustomCarousel images={home_images} />
      </Box>
      <Box
        backgroundImage="https://imagescdn.pantaloons.com/static/brand/pantaloons/production/Website/Desktop-Background.avif"
        backgroundRepeat="no-repeat"
        bgSize="cover"
        position="relative"
      >
        {/* <CustomCarousel2 images={caraousel_images} /> */}
        <MultiCaraousel images={caraousel_images} />
      </Box>
    </Box>
  );
};

export default Home;
