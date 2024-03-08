import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import headerImg from "../../../public/img1.png";

const PostHeader = ({ avatar, userName }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      {/* left side */}
      <Flex alignItems={"center"} gap={2} cursor={"pointer"}>
        <Avatar src={avatar} size={"sm"} />

        <Flex
          gap={1}
          style={{
            fontSize: "17px",
            fontWeight: "bolder",
            letterSpacing: "0.5px",
          }}
        >
          {userName}
          <Text>.1w</Text>
        </Flex>
      </Flex>
      {/* right side */}
      <Box>
        <Text
          style={{
            fontSize: "17px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
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
