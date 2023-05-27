import React, { useState } from "react";
import CustomCarousel from "../components/Carousel";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import MultiCaraousel from "../components/MultiCaraousel";
import { Link } from "react-router-dom";
import RoundCards from "../components/RoundCards";

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
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/week2/homepage/NPT-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 6,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/week2/homepage/Summer23-D.jpg.transform/i1680x550/image.jpeg",
  },
  {
    id: 7,
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/week2/homepage/Kidswear-D.jpg.transform/i1680x550/image.jpeg",
  },
];

type prodProps = {
  id: number | string;
  img: string;
  brand: string;
  price: number;
  title: string;
  to: string;
};

const men_arrival: prodProps[] = [
  {
    id: 1,
    img: "https://imagescdn.pantaloons.com/img/app/product/4/461137-3191185.jpg",
    brand: "Pantaloons",
    title: "Bare Denim",
    price: 899,
    to: "/men",
  },
  {
    id: 2,
    img: "https://imagescdn.pantaloons.com/img/app/product/4/461136-3191179.jpg",
    brand: "Pantaloons",
    title: "Blue Jeans",
    price: 899,
    to: "/men",
  },
  {
    id: 3,
    img: "https://imagescdn.pantaloons.com/img/app/product/4/462022-3204736.jpg",
    brand: "Ajile",
    title: "T Shirt",
    price: 349,
    to: "/men",
  },
  {
    id: 4,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/641059-6392724.jpg",
    brand: "Pantaloons",
    title: "Shirt",
    price: 1199,
    to: "/men",
  },
  {
    id: 5,
    img: "https://imagescdn.pantaloons.com/img/app/product/4/461134-3191167.jpg",
    brand: "Pantaloons",
    title: "Blue Jeans",
    price: 899,
    to: "/men",
  },
  {
    id: 6,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/629722-6439158.jpg",
    brand: "Pantaloons",
    title: "Shirt & Trouser",
    price: 999,
    to: "/men",
  },
  {
    id: 7,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/623753-6128169.jpg",
    brand: "Pantaloons",
    title: "Waiste Coat",
    price: 849,
    to: "/men",
  },
];
const wommen_arrival: prodProps[] = [
  {
    id: 1,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/877247-10518138.jpg",
    brand: "Rangmanch",
    title: "Kurta",
    price: 1899,
    to: "/women",
  },
  {
    id: 2,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/877246-10518132.jpg",
    brand: "Rangmanch",
    title: "Print Kurta",
    price: 1599,
    to: "/women",
  },
  {
    id: 3,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/870535-10462073.jpg",
    brand: "Pantaloons",
    title: "Mauve Kurta",
    price: 349,
    to: "/women",
  },
  {
    id: 4,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/875538-10460597.jpg",
    brand: "Pantaloons",
    title: "Lilac Kurta",
    price: 1899,
    to: "/women",
  },
  {
    id: 5,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/873099-10409795.jpg",
    brand: "Pantaloons",
    title: "Sea Blue Kurta",
    price: 1799,
    to: "/women",
  },
  {
    id: 6,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/880545-10584087.jpg",
    brand: "Pantaloons",
    title: "Kurta",
    price: 1799,
    to: "/women",
  },
  {
    id: 7,
    img: "https://imagescdn.pantaloons.com/img/app/product/7/737951-8252695.jpg",
    brand: "Pantaloons",
    title: "Kurta Pants",
    price: 1999,
    to: "/women",
  },
  {
    id: 8,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/865437-10247154.jpg",
    brand: "Bare Denim",
    title: "Off-white Jeans",
    price: 1899,
    to: "/women",
  },
];
const kids_arrival: prodProps[] = [
  {
    id: 1,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/813157-9701050.jpg",
    brand: "Pantaloons Junior",
    title: "Blouse",
    price: 454,
    to: "/kids",
  },
  {
    id: 2,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/813164-9701105.jpg",
    brand: "Pantaloons Junior",
    title: "Blouse",
    price: 419,
    to: "/kids",
  },
  {
    id: 3,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/871566-10385808.jpg",
    brand: "Pantaloons Junior",
    title: "Frock",
    price: 839,
    to: "/kids",
  },
  {
    id: 4,
    img: "https://imagescdn.pantaloons.com/img/app/product/8/816587-9759689.jpg",
    brand: "Mini Klub",
    title: "Medium Blue T-Shirt",
    price: 509,
    to: "/kids",
  },
  {
    id: 5,
    img: "https://imagescdn.pantaloons.com/img/app/product/7/780764-9071694.jpg",
    brand: "Indus Route",
    title: "SPink Kurta Pyjama Set",
    price: 562,
    to: "/kids",
  },
  {
    id: 6,
    img: "https://imagescdn.pantaloons.com/img/app/product/6/680418-7165462.jpg",
    brand: "Pantaloons Jr.",
    title: "Shorts",
    price: 398,
    to: "/kids",
  },
  {
    id: 7,
    img: "https://imagescdn.pantaloons.com/img/app/product/7/736525-8226965.jpg",
    brand: "Pantaloons Jr.",
    title: "Leggings",
    price: 398,
    to: "/kids",
  },
];

const trendings: { id: number; img: string; title: string; to: string }[] = [
  {
    id: 1,
    title: "Men",
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/men/SS23-2.jpg.transform/i296x300/image.jpeg",
    to: "/men",
  },
  {
    id: 2,
    title: "Women",
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/women/CoordSets.jpg.transform/i296x300/image.jpeg",
    to: "/women",
  },
  {
    id: 3,
    title: "Kids",
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/kids/SS23-2.jpg.transform/i296x300/image.jpeg",
    to: "/kids",
  },
  {
    id: 4,
    title: "Accessories",
    img: "https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/acc/acc/ToteBags.jpg.transform/i296x300/image.jpeg",
    to: "/accessories",
  },
];
const Brands = () => {
  // shop the look
  const [text, setText] = useState<string>("Women");

  const handleTextClick = (val: string) => {
    setText(val);
  };

  return (
    <Box overflow="hidden">
      <Box w="100%">
        <CustomCarousel images={home_images} />
      </Box>

      {/* Trendings */}
      <Center py="20px">
        <Box
          w={{ base: "85%", md: "80%", lg: "70%" }}
          m="auto"
          py="20px"
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading my="20px">Trending</Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing="2%">
            {trendings?.map((el) => (
              <Box
                key={el.id}
                width={{ base: "90%", sm: "70%", md: "100%", lg: "100%" }}
                m="auto"
              >
                <Link to={el.to}>
                  <RoundCards title={el.title} img={el.img} />
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Center>

      {/* Men - Deals*/}
      <Box
        backgroundImage="https://imagescdn.pantaloons.com/static/brand/pantaloons/production/Website/Desktop-Background.avif"
        backgroundRepeat="no-repeat"
        bgSize="cover"
        py="20px"
      >
        <Box w={{ base: "85%", md: "80%", lg: "70%" }} m="auto">
          <Heading
            size="lg"
            my="20px"
            textAlign={{ base: "center", md: "left" }}
          >
            Men's deal of the day
          </Heading>
          <MultiCaraousel images={men_arrival} />
        </Box>
      </Box>
      {/* Women - Deals */}
      <Box bgColor="gray.100" py="20px">
        <Box w={{ base: "85%", md: "80%", lg: "70%" }} m="auto">
          <Heading
            size="lg"
            my="20px"
            textAlign={{ base: "center", md: "left" }}
          >
            Women's deal of the day
          </Heading>
          <MultiCaraousel images={wommen_arrival} />
        </Box>
      </Box>

      {/* Kids - Deals */}
      <Box bgColor="lightblue" py="20px">
        <Box w={{ base: "85%", md: "80%", lg: "70%" }} m="auto">
          <Heading
            size="lg"
            my="20px"
            textAlign={{ base: "center", md: "left" }}
          >
            Kid's deal of the day
          </Heading>
          <MultiCaraousel images={kids_arrival} />
        </Box>
      </Box>

      {/* card-images */}
      <Box py="50px">
        <Flex
          w="70%"
          m="auto"
          justifyContent="center"
          gap="20px"
          flexDir={{ base: "column", md: "row" }}
        >
          <Link to="#">
            <Image
              src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/march23/Beauty-D.jpg.transform/i671x305/image.jpeg"
              w="100%"
              borderRadius="20px"
            />
          </Link>
          <Link to="#">
            <Image
              src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/refresh/april23/SummerStyles-D.jpg.transform/i671x305/image.jpeg"
              w="100%"
              borderRadius="20px"
            />
          </Link>
        </Flex>
      </Box>

      {/* shop the look */}
      <Center>
        <Box bgColor="#f6fadc" w={{ base: "90%", md: "70%" }} m="auto" p="20px">
          <Flex
            flexDir={{ base: "column", md: "row" }}
            rowGap="10px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading>Shop the look</Heading>
            <Flex gap="2%" justifyContent="center" alignItems="center">
              <Button
                size={{ base: "sm", md: "md", lg: "lg" }}
                borderRadius="20px"
                bgColor={text === "Women" ? "#ffc929" : "none"}
                onClick={() => handleTextClick("Women")}
              >
                Women
              </Button>
              <Button
                size={{ base: "sm", md: "md", lg: "lg" }}
                borderRadius="20px"
                bgColor={text === "Men" ? "#ffc929" : "none"}
                onClick={() => handleTextClick("Men")}
              >
                Men
              </Button>
              <Button
                size={{ base: "sm", md: "md", lg: "lg" }}
                borderRadius="20px"
                bgColor={text === "Kids" ? "#ffc929" : "none"}
                onClick={() => handleTextClick("Kids")}
              >
                Kids
              </Button>
              <Button
                size={{ base: "sm", md: "md", lg: "lg" }}
                borderRadius="20px"
                bgColor={text === "Ethnic Wear" ? "#ffc929" : "none"}
                onClick={() => handleTextClick("Ethnic Wear")}
              >
                Ethnic Wear
              </Button>
            </Flex>
          </Flex>
          {text === "Women" && (
            <Flex justifyContent="space-between" alignItems="center" mt="20px">
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/women-western/Pink%20Romance-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/women-western/Summer%20Swirl-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/women-western/Glam%20Gal-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
            </Flex>
          )}
          {text === "Men" && (
            <Flex justifyContent="space-between" alignItems="center" my="20px">
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/mens/Sunny%20Days%20Fav-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/mens/The%20Indigo%20Edit-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/mens/Cool%20Comfort-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
            </Flex>
          )}
          {text === "Kids" && (
            <Flex justifyContent="space-between" alignItems="center" my="20px">
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/kids/Outdoor%20Play-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/kids/Candy%20Crush-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/kids/Playful%20Vibes-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
            </Flex>
          )}
          {text === "Ethnic Wear" && (
            <Flex justifyContent="space-between" alignItems="center" my="20px">
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/ethnic/Rangmanch-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/ethnic/Ethnic%20Mode%20On-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
              <Image
                src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/may-2023/shop-the-look-/ethnic/Casual%20Classics-D.jpg.transform/i439x600/image.jpeg"
                w="30%"
                h="50%"
              />
            </Flex>
          )}
        </Box>
      </Center>
    </Box>
  );
};

export default Brands;
