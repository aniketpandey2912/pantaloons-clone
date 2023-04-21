import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { clickBtnType, inputType } from "./const.pages";
import { validation } from "../utils";
import { NavLink, useNavigate } from "react-router-dom";
import { loginApi } from "../redux/users/auth.actions";
import { useAppDispatch, useAppSelector } from "../redux/store";
type loginType = { email: string; password: string };

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((store) => store.authManager);
  const toast = useToast();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFromData] = useState<loginType>(initState);

  const handleChange: inputType = (e) => {
    let { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handleSubmit: clickBtnType = async () => {
    if (validation(formData)) {
      dispatch(loginApi(formData.email, formData.password)).then((res: any) => {
        toast({
          title: res.mssg,
          status: res.status ? "success" : "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        if (res.status) {
          navigate("/");
        }
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
          Login
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
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
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

          <Stack spacing={10} pt={2}>
            <Button
              isLoading={isLoading}
              loadingText="Submitting"
              size="lg"
              bg={"#00b0b5"}
              color={"white"}
              _hover={{
                bg: "#a4f9fe",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
            {isLoading ? "Loading" : ""}
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Don't have an account?
              <NavLink
                to="/signup"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "rgb(57, 204, 204)",
                  };
                }}
                end
              >
                Singup
              </NavLink>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
