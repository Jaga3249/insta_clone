import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import headerImg from "../../../public/img1.png";

const PostHeader = ({ avatar, userName }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      {/* left side */}
      <Flex alignItems={"center"} gap={1} cursor={"pointer"}>
        <Avatar src={avatar} size={"sm"} />

        <Flex gap={1} fontSize={"16px"}>
          {userName}
          <Text>.1w</Text>
        </Flex>
      </Flex>
      {/* right side */}
      <Box>
        <Text
          fontSize={"16px"}
          cursor={"pointer"}
          _hover={{ color: "blue" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
