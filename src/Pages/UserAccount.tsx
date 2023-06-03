import { useEffect, useRef, useState } from "react";
import {
  Heading,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Text,
  Box,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import axios from "axios";
import { getUserInfoAPI, updateUserInfoAPI } from "../redux/users/auth.actions";

const UserAccount = () => {
  const { user, token } = useAppSelector((store) => store.authManager);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const initState = {
    avatar: user.avatar,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    gender: user.gender,
    mobile: user.mobile,
  };

  const [formData, setFromData] = useState(initState);
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handleOpenFiles = () => {
    console.log("Open files");
    fileInputRef.current?.click();
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      // console.log("Selected file:", file);
      const formImgData = new FormData();
      formImgData.append("file", file);
      formImgData.append("upload_preset", "ao8hjn9o");
      uploadImage(formImgData);
    }
  };

  const uploadImage = (formImgData: any) => {
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dgwuo2wpw/image/upload",
        formImgData,
        {
          headers: token,
        }
      )
      .then((res) => {
        console.log(res);
        formData.avatar = res.data.url;
        console.log("imag uploaded:", formData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUserInfo = (updates: any) => {
    setLoading(true);
    dispatch(updateUserInfoAPI(token, formData))
      .then((res: any) => {
        toast({
          title: res.mssg,
          status: res.status ? "success" : "error",
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    dispatch(getUserInfoAPI(token));
  }, [dispatch, token]);

  return (
    <Flex
      w="100%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile
          </Heading>
          <Text color="blue" cursor="pointer" onClick={() => setEdit(!edit)}>
            Edit
          </Text>
        </Flex>
        <FormControl id="userName">
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={user.avatar}>
                <AvatarBadge
                  isDisabled={edit}
                  as={IconButton} // controlling profile picture edit
                  size="sm"
                  rounded="full"
                  // top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<EditIcon />}
                  onClick={handleOpenFiles}
                />
              </Avatar>
              {/* input-hidden, controlled by edit button */}
              <Input
                type="file"
                display="none"
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e)}
              />
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <Flex>
            <Box>
              <FormLabel>First name</FormLabel>
              <Input
                isDisabled={edit}
                placeholder="first name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                value={formData.first_name}
                name="first_name"
                onChange={(e) => handleChange(e)}
              />
            </Box>
            <Box>
              <FormLabel>Last name</FormLabel>
              <Input
                isDisabled={edit}
                placeholder="last name"
                _placeholder={{ color: "gray.500" }}
                type="text"
                value={formData.last_name}
                name="last_name"
                onChange={(e) => handleChange(e)}
              />
            </Box>
          </Flex>
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            isDisabled={edit}
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl id="mobile" isRequired>
          <FormLabel>Mobile</FormLabel>
          <Input
            isDisabled={edit}
            placeholder="mobile"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={formData.mobile}
            name="mobile"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            isDisabled={edit}
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            isDisabled={edit}
            isLoading={loading}
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            onClick={updateUserInfo}
          >
            Save Changes
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default UserAccount;
