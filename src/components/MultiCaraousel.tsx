import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  images: { id: number | string; img: string }[];
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const MultiCaraousel = ({ images }: Props) => {
  return (
    <Carousel responsive={responsive}>
      {images?.map((el) => (
        <Box key={el.id}>
          <Image src={el.img} w="300px" h="400px" />
        </Box>
      ))}
    </Carousel>
  );
};

export default MultiCaraousel;
