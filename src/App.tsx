import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./routing/AllRoutes";
import Footer from "./components/Footer";
// import CustomCarousel2 from "./components/Caraousel2";

// const caraousel_images: { id: number | string; img: string }[] = [
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
//   {
//     id: 6,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
//   },
//   {
//     id: 7,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
//   },
//   {
//     id: 8,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
//   },
//   {
//     id: 9,
//     img: "https://imagescdn.pantaloons.com/img/app/product/6/640741-6395213.jpg",
//   },
// ];

function App() {
  return (
    <Box>
      <Box w="100%" position="sticky" top="0px" zIndex="1000">
        <Center>
          <Navbar />
        </Center>
      </Box>
      <Center>
        <AllRoutes />
      </Center>
      {/* <CustomCarousel2 images={caraousel_images} /> */}
      <Center>
        <Footer />
      </Center>
    </Box>
  );
}

export default App;
