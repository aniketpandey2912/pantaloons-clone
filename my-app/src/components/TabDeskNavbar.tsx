import { Box, Flex, HStack, Icon, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

import { VscAccount, VscHeart } from "react-icons/vsc";
import { TfiBag } from "react-icons/tfi";
import { menuProps } from "./const.components";

// values
const menu: menuProps[] = [
  { to: "/women", title: "WOMEN" },
  { to: "/men", title: "MEN" },
  { to: "/kids", title: "KIDS" },
  { to: "/homedecor", title: "HOME" },
  { to: "/accessories", title: "ACCESSORIES" },
  { to: "/brands", title: "BRANDS" },
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

      {/* <HStack> */}
      {menu?.map((el) => (
        <NavLink
          key={el.to}
          to={el.to}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          end
        >
          {el.title}
        </NavLink>
      ))}
      {/* </HStack> */}

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
