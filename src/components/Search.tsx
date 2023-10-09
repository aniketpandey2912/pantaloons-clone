import { useEffect, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { debouncing } from "../utils";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  emptySearchedProductsApi,
  getSearchedProductsApi,
} from "../redux/products/products.actions";
import { ProductProps } from "../redux/products/productTypes";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { data, error } = useAppSelector(
    (store) => store.productsManager.searchedProducts
  );
  const [errMssg, setErrMssg] = useState<string | boolean>(false);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  // Getting search list
  const getSearchList = (...args: any) => {
    dispatch(emptySearchedProductsApi());
    const searchKeyword: string = args[0] ?? "";
    if (searchKeyword) {
      dispatch(
        getSearchedProductsApi(`products/allSearchedproducts/${searchKeyword}`)
      );
    }
  };

  // Using debouncing
  const getMatchingProducts = (str: string) => {
    setErrMssg(false);
    debouncing(getSearchList, str, 1000);
  };

  // SearchBox visibilty
  const changeVisibility = () => {
    const searchResultBox = document.getElementById("searchResultBox");
    if (searchResultBox) {
      searchResultBox.style.display = error || data.length ? "block" : "none";
    }
  };

  // Goto single product page
  const gotoSingleProductPage = async (path: string) => {
    await dispatch(emptySearchedProductsApi());
    const searchInput: any = document.getElementById("searchInput");
    if (searchInput && searchInput?.value) {
      searchInput.value = "";
      navigate(path);
    }
  };

  useEffect(() => {
    if (error) {
      setErrMssg("No products found");
    }
  }, [error]);

  return (
    <Box>
      <InputGroup size="md">
        <Input
          id="searchInput"
          ref={(node) => changeVisibility()}
          focusBorderColor="#fff"
          _placeholder={{ color: "#fff" }}
          fontSize=".85em"
          type="text"
          placeholder="Search for products and more..."
          onChange={(e) => getMatchingProducts(e.target.value)}
        />
        <InputRightElement width="3rem" fontSize="2em">
          <CiSearch color="white" />
        </InputRightElement>
      </InputGroup>

      {data && data.length !== 0 && (
        <Box
          id="searchResultBox"
          pos="absolute"
          bgColor="#00b0b5"
          color="#fff"
          mt="10px"
          maxH="50vh"
          overflow="auto"
        >
          {data?.map((el: ProductProps) => (
            <Flex
              key={el.id}
              borderBottom="1px solid white"
              py="5px"
              align="center"
              gap="2px"
              cursor="pointer"
              onClick={() =>
                gotoSingleProductPage(`/productdetailings/${el.id}`)
              }
            >
              <Image src={el?.imageURL ?? ""} h="25px" w="20px" />
              <Text>{el.Name ?? ""}</Text>
            </Flex>
          ))}
        </Box>
      )}

      {errMssg !== false && (
        <Box>
          <Text>{errMssg}</Text>
        </Box>
      )}
    </Box>
  );
};

export default Search;
