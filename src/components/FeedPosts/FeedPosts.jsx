import {
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";

import UseGetFeedPosts from "../../Hooks/UseGetFeedPosts";

const FeedPosts = () => {
  const { posts, loading } = UseGetFeedPosts();

  // console.log("render1");

  return (
    <Container maxW="md">
      {loading &&
        posts.map((item, index) => (
          <VStack key={index}>
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              w={"full"}
              gap={2}
              mt={3}
            >
              <SkeletonCircle size="10" />
              <VStack>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <div>contents wrapped</div>
              <div>won't be visible</div>
              <div>won't be visible</div> <div>won't be visible</div>{" "}
              <div>won't be visible</div> <div>won't be visible</div>
            </Skeleton>
          </VStack>
        ))}
      {!loading && (
        <>
          {posts.length > 0 &&
            posts.map((post) => <FeedPost post={post} key={post.id} />)}
        </>
      )}
      {/* {!loading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayuum. Looks like you don&apos;t have any friends.
          </Text>
          <Text color={"red.400"}>Stop coding and go make some!!</Text>
        </>
      )} */}
    </Container>
  );
};

export default FeedPosts;
