import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import { timeAgo } from "../../utils/TimeAgo";
import { BsThreeDots } from "react-icons/bs";

import UserPostModal from "../../Modals/UserPostModal";
import UseSavePosts from "../../Hooks/UseSavePosts";
import { UserProfileStore } from "../../store/UserProfileStore";

const PostHeader = ({ post, creatorProfile }) => {
  const [open, setOpen] = useState(false);

  const { onClose } = useDisclosure();

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
      <Box
        style={{
          fontSize: "17px",
          fontWeight: "bold",
          letterSpacing: "0.5px",
        }}
        cursor={"pointer"}
        onClick={() => setOpen(true)}
      >
        <BsThreeDots size={30} />
      </Box>

      <UserPostModal
        isOpen={open}
        onClose={onClose}
        post={post}
        setOpen={setOpen}
      />
    </Flex>
  );
};

export default PostHeader;
