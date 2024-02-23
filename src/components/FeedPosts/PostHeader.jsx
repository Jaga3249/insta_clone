import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import headerImg from "../../../public/img1.png";

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      {/* left side */}
      <Flex alignItems={"center"} gap={1}>
        <Avatar src={headerImg} size={"sm"} />

        <Flex gap={1}>
          Pogrammer
          <Text>.1w</Text>
        </Flex>
      </Flex>
      {/* right side */}
      <Box>
        <Text>Unfollow</Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
