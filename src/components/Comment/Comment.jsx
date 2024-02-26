import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Comment = ({ avatar, userName, createdAt, commentMsg }) => {
  return (
    <Flex w={"full"} alignItems={"center"} gap={3} mb={2} px={2}>
      <Avatar src={avatar} />
      <Flex flexDirection={"column"} gap={0}>
        <Flex gap={2}>
          <Text as={"span"}>{userName},</Text>
          <Text color={"gray.400"}>{commentMsg}</Text>
        </Flex>
        <Box color={"whiteAlpha.400"}>{createdAt}</Box>
      </Flex>
    </Flex>
  );
};

export default Comment;
