import React from "react";
import PostHeader from "./PostHeader";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import image1 from "../../../public/img1.png";

const FeedPost = () => {
  return (
    <Flex direction={"column"} gap={1}>
      <PostHeader />
      <Box>
        <Image src={image1} h={"full"} />
      </Box>
      <PostFooter />
    </Flex>
  );
};

export default FeedPost;
