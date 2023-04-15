import React, { useState } from "react";
import {
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { GrRestroomWomen, GrRestroomMen } from "react-icons/gr";
import { BiChild } from "react-icons/bi";
import { SiEngadget } from "react-icons/si";
import { TbBrandShopee } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { menuProps } from "./const.components";

// values
const menu: menuProps[] = [
  { to: "/women", title: "WOMEN", icon: <GrRestroomWomen /> },
  { to: "/men", title: "MEN", icon: <GrRestroomMen /> },
  { to: "/kids", title: "KIDS", icon: <BiChild /> },
  { to: "/homedecor", title: "HOME", icon: <AiOutlineHome /> },
  { to: "/accessories", title: "ACCESSORIES", icon: <SiEngadget /> },
  { to: "/brands", title: "BRANDS", icon: <TbBrandShopee /> },
];

const MobileNavbar = () => {
  const [cross, setCross] = useState(false);
  return (
    <Flex
      w="100%"
      bgColor={navStyles.bgColor}
      color={navStyles.color}
      px={{ base: "0.5em", md: "1em", lg: "3em", xl: "8em" }}
      py="1em"
      justifyContent="space-between"
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
      <Menu>
        <MenuButton
          as={IconButton}
          colorScheme="#fff"
          aria-label="Options"
          icon={cross ? <AiOutlineClose /> : <RxHamburgerMenu />}
          variant="outline"
          onClick={() => setCross((prev) => !prev)}
        />
        <MenuList color="black">
          {menu?.map((el) => (
            <NavLink
              key={el.to}
              to={el.to}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              end
            >
              <MenuItem icon={el.icon} onClick={() => setCross(false)}>
                {el.title}
              </MenuItem>
            </NavLink>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MobileNavbar;

const navStyles = {
  bgColor: "#00b0b5",
  color: "#fff",
};
