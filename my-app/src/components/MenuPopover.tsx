import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { menuProps } from "./const.components";

type popoverProps = {
  menu: menuProps;
  left?: { base: string; sm: string; md: string; lg: string };
};

function MenuPopover({ menu, left }: popoverProps) {
  return (
    <Popover isLazy trigger={"hover"}>
      <PopoverTrigger>
        <Text _hover={{ textDecoration: "underline" }}>{menu.title}</Text>
      </PopoverTrigger>
      <PopoverContent
        w="80vw"
        position="relative"
        left={left || "10%"}
        top={{ sm: "0.6em", md: "1em" }}
      >
        <PopoverHeader fontWeight="semibold" color="black">
          {menu.title}
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody color="black" fontSize="xs">
          <Flex gap="20px" flexDirection={{ base: "column", md: "row" }}>
            <Flex
              justifyContent="space-between"
              w={{ base: "100%", md: "60%" }}
              flexDirection={{ base: "row" }}
            >
              {menu?.menu.box1?.map((el) => (
                <Flex key={el.id} flexDirection="column" gap="5px">
                  <Heading size="xxs">{el.title}</Heading>
                  {el.options?.map((opt: string, ind: number) => (
                    <Text key={ind} _hover={{ color: "#00b0b5" }}>
                      {opt}
                    </Text>
                  ))}
                </Flex>
              ))}
            </Flex>
            <Flex
              flexDirection="column"
              gap="20px"
              w={{ base: "100%", md: "40%" }}
            >
              <Box>
                <Heading size="xxs">{menu?.menu.box2[0]?.title}</Heading>
                <HStack>
                  {menu?.menu.box2[0]?.images?.map(({ img }) => (
                    <Image
                      key={img}
                      src={img}
                      w={{ sm: "150px", md: "120px", lg: "150px" }}
                    />
                  ))}
                </HStack>
              </Box>
              <Box>
                <Heading size="xxs">{menu?.menu.box2[1]?.title}</Heading>
                <Flex color="black" flexWrap="wrap" gap="10px">
                  {menu?.menu.box2[1]?.tags?.map((el: string, ind: number) => (
                    <Tag key={ind}>{el}</Tag>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Heading size="xxs">{menu?.menu.box2[2]?.title}</Heading>
                <SimpleGrid
                  columns={{ sm: 6, md: 3, lg: 4 }}
                  spacingX="0px"
                  spacingY="20px"
                >
                  {menu?.menu.box2[2]?.images?.map(({ img }) => (
                    <Image key={img} src={img} w="80px" />
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default MenuPopover;
