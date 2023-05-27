import {
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Card,
  CardBody,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

type Props = {
  images: {
    id: number | string;
    img: string;
    brand: string;
    title: string;
    price: number;
    to: string;
  }[];
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCaraousel = ({ images }: Props) => {
  return (
    <Carousel responsive={responsive} infinite={true}>
      {images?.map((el) => (
        <ProductSimple
          key={el.id}
          IMAGE={el.img}
          BRAND={el.brand}
          TITLE={el.title}
          PRICE={el.price}
          to={el.to}
        />
      ))}
    </Carousel>
  );
};

export default MultiCaraousel;

const ProductSimple = ({
  IMAGE,
  BRAND,
  TITLE,
  PRICE,
  to,
}: {
  IMAGE: string;
  BRAND: string;
  TITLE: string;
  PRICE: number;
  to: string;
}) => {
  return (
    <Center>
      <Link to={to}>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={IMAGE}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              w={{ base: "220px", sm: "200px", md: "220px", lg: "250px" }}
              h={{ base: "250px", sm: "200px", md: "280px", lg: "300px" }}
            />
            <Stack mt="2" spacing="3">
              <Heading size="md">{BRAND}</Heading>
              <Text>{TITLE}</Text>
              <Text color="teal.600" fontSize="xl">
                Rs.{PRICE}{" "}
                <span
                  style={{ textDecoration: "line-through", fontSize: "14px" }}
                >
                  Rs. {Math.floor(PRICE + Math.random() * 1000)}
                </span>
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Link>
    </Center>
  );
};

/* 
  {/* <Box
        role={"group"}
        p={6}
        maxW={"340px"}
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
          // height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
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
            height={350}
            width={282}
            // height={230}
            // width={282}
            // objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {BRAND}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {TITLE}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              Rs.{PRICE}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              Rs.{Math.floor(PRICE + Math.random() * 1000)}
            </Text>
          </Stack>
        </Stack>
      </Box>}
*/
