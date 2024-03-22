import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import React from "react";

import ProfilePost from "./ProfilePost";

import UseGetPosts from "../../Hooks/UseGetPosts";
import { UserProfileStore } from "../../store/UserProfileStore";

const ProfilePosts = () => {
  const { isloading, post } = UseGetPosts();

  const nopostFound = !isloading && post.length === 0;
  if (nopostFound) return <NoPostFound />;

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
      cursor={"pointer"}
    >
      {isloading &&
        post.map((_, index) => (
          <VStack key={index} w={"full"}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isloading &&
        post.map((item, i) => <ProfilePost posts={item} key={i} />)}
    </Grid>
  );
};

const NoPostFound = () => (
  <Flex flexDir="column" textAlign={"center"} mx={"auto"} mt={10}>
    <Text fontSize={"2xl"}>No Posts Found🤔</Text>
  </Flex>
);

export default ProfilePosts;
