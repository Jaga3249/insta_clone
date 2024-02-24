import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ProfilePost = ({ img }) => {
  return (
    <GridItem
      templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
      cursor={"pointer"}
      borderRadius={"6px"}
      aspectRatio={1 / 1}
      position={"relative"}
    >
      <Flex
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        justifyContent={"center"}
        opacity={0}
        _hover={{ opacity: 1 }}
        bg={"blackAlpha.700"}
        transition={"all 0.2s ease "}
        zIndex={1}
        gap={30}
        alignItems={"center"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
          <Box>
            <AiFillHeart size={25} />
          </Box>
          <Text fontSize={"15px"}>7</Text>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
          <Box>
            <FaComment size={25} />
          </Box>
          <Text fontSize={"15px"}>7</Text>
        </Flex>
      </Flex>
      <Image
        src={img}
        alt="Profile Photo"
        w={"100%"}
        h={"100%"}
        objectFit={"fill"}
      />
    </GridItem>
  );
};

export default ProfilePost;
