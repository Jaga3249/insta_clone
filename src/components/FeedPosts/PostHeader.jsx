import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import headerImg from "../../../public/img1.png";
import { Link } from "react-router-dom";
import UseFollowUser from "../../Hooks/UseFollowUser";
import { timeAgo } from "../../utils/TimeAgo";

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing } = UseFollowUser(post?.createdBy);
  // console.log(post);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      {/* left side */}
      <Flex width={"100%"} alignItems={"center"} gap={4} cursor={"pointer"}>
        {creatorProfile ? (
          <>
            <Link to={`/${creatorProfile?.username}`}>
              <Avatar
                src={creatorProfile?.profilePicUrl || Avatar}
                size={"md"}
              />
            </Link>

            <Link to={`/${creatorProfile?.username}`}>
              {" "}
              {creatorProfile?.username}
            </Link>
            <Box color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
          </>
        ) : (
          <Flex alignItems={"center"} width={"100%"} gap={3} p={1}>
            <SkeletonCircle size="10" />
            <SkeletonText skeletonHeight="3" noOfLines={1} width={"80%"} />
          </Flex>
        )}
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
          onClick={handleFollowUser}
        >
          {isFollowing ? "UnFollow" : "Follow"}
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
