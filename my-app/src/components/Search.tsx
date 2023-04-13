import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <InputGroup size="md">
      <Input
        focusBorderColor="#fff"
        _placeholder={{ color: "#fff" }}
        fontSize=".85em"
        type="text"
        placeholder="Search for products and more..."
      />
      <InputRightElement width="3rem" fontSize="2em">
        <CiSearch color="white" />
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
