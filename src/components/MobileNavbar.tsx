import React, { useState } from "react";
import {
  Box,
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
import { navMenuProps } from "./const.components";
import { useAppSelector } from "../redux/store";
import UserInfo from "./UserInfo";

// values
const menu: navMenuProps[] = [
  { id: 1, to: "/women", title: "WOMEN", icon: <GrRestroomWomen /> },
  { id: 1, to: "/men", title: "MEN", icon: <GrRestroomMen /> },
  { id: 1, to: "/kids", title: "KIDS", icon: <BiChild /> },
  { id: 1, to: "/homedecor", title: "HOME", icon: <AiOutlineHome /> },
  { id: 1, to: "/accessories", title: "ACCESSORIES", icon: <SiEngadget /> },
  { id: 1, to: "/brands", title: "BRANDS", icon: <TbBrandShopee /> },
];

const MobileNavbar = () => {
  const { token } = useAppSelector((store) => store.authManager);
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
      {token && <UserInfo />}
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
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            colorScheme="#fff"
            aria-label="Options"
            icon={<RxHamburgerMenu />}
            // icon={cross ? <AiOutlineClose /> : <RxHamburgerMenu />}
            variant="outline"
            onClick={() => setCross((prev) => !prev)}
          />
          <MenuList color="black">
            {menu?.map((el) => (
              <NavLink
                key={el.id}
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
      </Box>
    </Flex>
  );
};

export default MobileNavbar;

const navStyles = {
  bgColor: "#00b0b5",
  color: "#fff",
};
