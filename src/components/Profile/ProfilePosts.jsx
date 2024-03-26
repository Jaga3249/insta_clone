import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import React from "react";

import ProfilePost from "./ProfilePost";
import UseGetPosts from "../../Hooks/UseGetPosts";
const ProfilePosts = () => {
  const { isloading, posts } = UseGetPosts();
  const nopostFound = !isloading && posts.length === 0;
  if (nopostFound) return <NoPostFound />;

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
      cursor={"pointer"}
    >
      {isloading
        ? posts.map((_, index) => (
            <VStack key={index} w={"full"}>
              <Skeleton w={"full"}>
                <Box h={"300px"}>content wrapped</Box>
              </Skeleton>
            </VStack>
          ))
        : posts.map((item, i) => <ProfilePost post={item} key={i} />)}
    </Grid>
  );
};

const NoPostFound = () => (
  <Flex flexDir="column" textAlign={"center"} mx={"auto"} mt={10}>
    <Text fontSize={"2xl"}>No Posts Found🤔</Text>
  </Flex>
);

export default ProfilePosts;
