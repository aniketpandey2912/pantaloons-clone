import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { logoutApi } from "../redux/users/auth.actions";

const UserInfo = () => {
  const { user } = useAppSelector((store) => store.authManager);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutApi());
  };

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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserInfo;
