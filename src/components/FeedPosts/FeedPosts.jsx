import { Container } from "@chakra-ui/react";
import React from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW="md">
      <FeedPost />
    </Container>
  );
};

export default FeedPosts;
