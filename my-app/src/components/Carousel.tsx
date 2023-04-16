import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselProps } from "./const.components";

const CustomCarousel = ({ images }: carouselProps) => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay>
      {images?.map((el) => (
        <Box key={el.id}>
          <Image src={el.img} alt="image" />
        </Box>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
