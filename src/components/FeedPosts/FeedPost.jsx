import React from "react";
import PostHeader from "./PostHeader";
import { Box, Flex, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

import UseGetUserProfileById from "../../Hooks/UseGetUserProfileById";

const FeedPost = ({ post }) => {
  const { userProfile } = UseGetUserProfileById(post.createdBy);

  return (
    <Flex direction={"column"} gap={4}>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box height={"70vh"} border={"1px solid gray "} borderRadius={"5px"}>
        <Image
          src={post.imageUrl}
          cursor={"pointer"}
          borderRadius={"10px"}
          width={"100%"}
          height={"100%"}
          objectFit={"contain"}
        />
      </Box>
      <PostFooter
        post={post}
        creatorProfile={userProfile}
        isProfilePage={false}
      />
    </Flex>
  );
};

export default FeedPost;
