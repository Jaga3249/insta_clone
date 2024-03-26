import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import UseGetUserProfileById from "../../Hooks/UseGetUserProfileById";

import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/TimeAgo";
import { BeatLoader } from "react-spinners";

const Comment = ({ comment }) => {
  const { userProfile, loading } = UseGetUserProfileById(comment.createdBy);

  // if (loading) return <CommentSkeletion loading={isLoading} />;

  return (
    <Flex w={"full"} alignItems={"center"} gap={3} mb={2} px={2}>
      <Link to={`/${userProfile?.username}`}>
        <Avatar src={userProfile?.profilePicUrl} width={8} height={8} />
      </Link>
      <Flex flexDirection={"column"} gap={0}>
        <Flex gap={3}>
          <Link to={`/${userProfile?.username}`}>
            <Text as={"span"}>{userProfile?.username}</Text>
          </Link>
          <Text color={"gray.400"}>{comment?.comment}</Text>
        </Flex>
        <Text>{timeAgo(comment.createdAt)}</Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
