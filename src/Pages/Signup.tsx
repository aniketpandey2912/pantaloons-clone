import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { clickBtnType, inputType, userType } from "./const.pages";
import { validation } from "../utils";
import { NavLink } from "react-router-dom";

const initState: userType = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  gender: "",
  mobile: "",
};

const Signup = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFromData] = useState<userType>(initState);

  const handleChange: inputType = (e) => {
    let { name, value } = e.target;

    setFromData({ ...formData, [name]: value });
  };

  const handleSubmit: clickBtnType = () => {
    if (validation(formData)) {
      console.log(formData);
      toast({
        title: "Sign up sucessful.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack mx={"auto"} maxW={"lg"} px={6}>
      <Stack align={"center"} bgColor="rgb(57, 204, 204)">
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Sign up
        </Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          to enjoy all of our cool features ✌️
        </Text>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        py={4}
      >
        <Stack spacing={2}>
          <HStack>
            <Box>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="fist_name"
                  value={formData.first_name}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="fist_name"
                  value={formData.last_name}
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
            </Box>
          </HStack>

          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="fist_name"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="passoword"
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select gender"
              value={formData.gender}
              onChange={(e) => handleChange(e)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mobile</FormLabel>
            <Input
              type="number"
              name="fist_name"
              value={formData.mobile}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={"#00b0b5"}
              color={"white"}
              _hover={{
                bg: "#a4f9fe",
              }}
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Already a user?
              <NavLink
                to="/login"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "rgb(57, 204, 204)",
                  };
                }}
                end
              >
                Login
              </NavLink>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Signup;