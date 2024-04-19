import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";

import UseGetFeedPosts from "../../Hooks/UseGetFeedPosts";
import useAuthStore from "../../store/AuthStore";

const FeedPosts = () => {
  const { posts, loading } = UseGetFeedPosts();

  const { user } = useAuthStore();

  return (
    <Container maxW="md">
      {user.following.length === 0 ? (
        <SamplePost />
      ) : (
        <>
          {loading ? (
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
            ))
          ) : (
            <>
              {posts.length > 0 &&
                posts.map((post) => <FeedPost post={post} key={post.id} />)}
            </>
          )}
        </>
      )}
    </Container>
  );
};
export default FeedPosts;

const SamplePost = () => {
  return (
    <>
      <Box
        style={{
          fontSize: "20px",
          fontStyle: "oblique",
          lineHeight: "45px",
          color: "aqua",
          letterSpacing: "1px",
          wordSpacing: "-1px",
        }}
      >
        Looks like you're just getting started! Start following other users to
        see their updates and activity here. Connect with friends, family, or
        discover new connections to make your experience richer and more
        engaging.
      </Box>
    </>
  );
};
