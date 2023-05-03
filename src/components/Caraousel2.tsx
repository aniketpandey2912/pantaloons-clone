import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Center,
  useColorModeValue,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselProps } from "./const.components";
import { clickBtnType } from "../Pages/const.pages";

const CustomCarousel2 = ({ images }: carouselProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  console.log(boxRef.current);
  let box = boxRef.current;
  const clickPrev: clickBtnType = () => {
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width);
    }
  };

  const clickNext: clickBtnType = () => {
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width);
    }
  };

  return (
    <Box
      ref={boxRef}
      className="caraousel-box"
      pos="relative"
      overflowX="hidden"
      p="26px"
      border="1px solid black"
      scrollBehavior="smooth"
    >
      <Button
        w="60px"
        h="100%"
        bgColor="transparent"
        pos="absolute"
        top="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
        left="0%"
        colorScheme="none"
        color="black"
        zIndex="100"
        onClick={clickPrev}
      >
        <Text fontSize="40px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
          &lt;
        </Text>
      </Button>
      <Button
        w="60px"
        h="100%"
        bgColor="transparent"
        pos="absolute"
        display="flex"
        top="0"
        justifyContent="center"
        alignItems="center"
        right="0%"
        colorScheme="none"
        color="black"
        zIndex="100"
        onClick={clickNext}
      >
        <Text fontSize="40px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
          &gt;
        </Text>
      </Button>

      <Flex
        justifyContent="center"
        alignItems="center"
        overflowX="hidden"
        scrollBehavior="smooth"
      >
        {images?.map((el) => (
          <MyCard key={el.id} img={el.img} />
        ))}
      </Flex>
    </Box>
  );
};

export default CustomCarousel2;

const MyCard = ({ img }: { img: string }) => {
  return (
    <Center py={12} border="1px solid black" minW="300px">
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"contain"}
            src={img}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $57
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
