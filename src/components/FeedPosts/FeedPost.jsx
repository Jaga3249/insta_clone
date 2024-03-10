import React from "react";
import PostHeader from "./PostHeader";
import { Box, Flex, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

const FeedPost = ({ img, avatar, userName }) => {
  return (
    <Flex direction={"column"} gap={1}>
      <PostHeader avatar={avatar} userName={userName} />
      <Box>
        <Image src={img} cursor={"pointer"} borderRadius={"10px"} />
      </Box>
      <PostFooter userName={userName} />
    </Flex>
  );
};

export default FeedPost;
