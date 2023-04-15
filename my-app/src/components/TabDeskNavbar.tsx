import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

import { VscAccount, VscHeart } from "react-icons/vsc";
import { TfiBag } from "react-icons/tfi";
import { menuProps } from "./const.components";

// values
const menu: menuProps[] = [
  {
    id: 1,
    to: "/women",
    title: "WOMEN",
    list1: [
      "WESTERN WEAR",
      "Tees & Tops",
      "Shirts & Blouses",
      "Dresses & Jumpsuits",
      "Suits & Blazers",
      "Sweaters & Sweatshirts",
      "Shrugs",
      "Jackets",
      "Trousers",
      "Jeans",
      "Shorts",
      "Culottes & Capris",
      "Tracks & Joggers",
      "Skirts",
    ],
    list2: [
      {
        id: 1,
        heading: "NEW ARRIVALS",
        items: [
          "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1631080475_tops.jpg",
          "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1631106933_newarrivalswomen-jeans.jpg",
        ],
      },
      {
        id: 2,
        heading: "SHOP BY OCCASION",
        items: ["Casual", "Work Wear", "Festive", "Party"],
      },
      {
        id: 3,
        heading: "SHOP BY BRANDS",
        items: [
          "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1632143381_AjileWomen.jpg",
          "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460202_Womens-Logos-Akkriti.jpg",
          "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653459907_Womens-Logos-Annabelle.jpg",
          "https://imagescdn.pantaloons.com/uploads/menuitemimages/production/1653460285_Womens-Logos-Biba.jpg",
        ],
      },
    ],
  },
  { id: 2, to: "/men", title: "MEN", list1: ["Aniket", "Pandey"] },
  { id: 3, to: "/kids", title: "KIDS", list1: ["Aniket", "Pandey"] },
  { id: 4, to: "/homedecor", title: "HOME", list1: ["Aniket", "Pandey"] },
  {
    id: 5,
    to: "/accessories",
    title: "ACCESSORIES",
    list1: ["Aniket", "Pandey"],
  },
  { id: 6, to: "/brands", title: "BRANDS", list1: ["Aniket", "Pandey"] },
];

// Main component
const TabDeskNavbar = () => {
  return (
    <Flex
      w="100%"
      bgColor={navStyles.bgColor}
      color={navStyles.color}
      px={{ base: "0.5em", md: "1em", lg: "3em", xl: "8em" }}
      py="1em"
      fontSize={{ base: "1em", sm: "0.7em", md: "0.8em", lg: "1em" }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        end
      >
        <Image
          src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/icons/logo_pantaloons.svg"
          w="10em"
        />
      </NavLink>

      {menu?.map((el) => (
        <NavLink
          key={el.id}
          to={el.to}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          end
        >
          <PopoverContentInside
            title={el.title}
            list1={el.list1}
            list2={el.list2}
          />
        </NavLink>
      ))}

      <Box w="15em" display={{ base: "none", md: "block" }}>
        <Search />
      </Box>

      <HStack spacing="1.5em">
        <Icon as={VscAccount} boxSize={iconBoxSize} />
        <Icon as={VscHeart} boxSize={iconBoxSize} display={iconDisplay} />
        <Icon as={TfiBag} boxSize={iconBoxSize} display={iconDisplay} />
      </HStack>
    </Flex>
  );
};

export default TabDeskNavbar;

// styles
const navStyles = {
  bgColor: "#00b0b5",
  color: "#fff",
};

const iconBoxSize = { base: "1.5em", sm: "1.4em", md: "1.4em", lg: "1.2em" };
const iconDisplay = { base: "none", md: "block" };

const PopoverContentInside = ({ title, list1, list2 }: any) => {
  return (
    <Popover isLazy trigger={"hover"}>
      <PopoverTrigger>
        <Text>{title}</Text>
      </PopoverTrigger>
      <PopoverContent position="relative">
        <PopoverHeader fontWeight="semibold" color="black">
          {title}
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Flex color="black">
            <VStack textAlign="left">
              {list1?.map((el: any) => (
                <Text key={el}>{el}</Text>
              ))}
            </VStack>
            <VStack>
              <Box>
                <Text>{list2 && list2[0].heading}</Text>
                {list2 &&
                  list2[0].items.map((el: string) => <Image src={el} />)}
              </Box>
              <Box>
                <Text>{list2 && list2[1].heading}</Text>
              </Box>
              <Box>
                <Text>{list2 && list2[2].heading}</Text>
              </Box>
            </VStack>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
