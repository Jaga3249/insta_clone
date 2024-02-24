import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";

const ProfileTabs = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      py={2}
      textTransform={"uppercase"}
      w={"full"}
      gap={{ base: 3, sm: 4 }}
    >
      <Flex
        borderTop={"1px solid"}
        alignItems={"center"}
        cursor={"pointer"}
        gap={1}
        p={1}
      >
        <Box>
          <BsFillGrid3X3GapFill size={20} />
        </Box>
        <Text fontSize={16} display={{ base: "none", sm: "block" }}>
          Posts
        </Text>
      </Flex>
      <Flex cursor={"pointer"} gap={1} p={1} alignItems={"center"}>
        <Box>
          <FaBookmark size={20} />
        </Box>
        <Text fontSize={16} display={{ base: "none", sm: "block" }}>
          Save
        </Text>
      </Flex>
      <Flex cursor={"pointer"} gap={1} p={1} alignItems={"center"}>
        <Box>
          <GrFavorite size={20} />
        </Box>
        <Text fontSize={16} display={{ base: "none", sm: "block" }}>
          Likes
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
