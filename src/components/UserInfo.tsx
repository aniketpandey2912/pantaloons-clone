import React from "react";
import { useAppSelector } from "../redux/store";
import { Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const UserInfo = () => {
  const { user } = useAppSelector((store) => store.authManager);

  console.log(user);

  return (
    <Menu>
      <MenuButton>
        <Image
          src={user.avatar}
          alt={user.first_name}
          w={{ base: "40px", md: "35px" }}
          borderRadius="50%"
        />
      </MenuButton>
      <MenuList color="black" mt="10px">
        <NavLink to="/useraccount">
          <MenuItem>My Account</MenuItem>
        </NavLink>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserInfo;
