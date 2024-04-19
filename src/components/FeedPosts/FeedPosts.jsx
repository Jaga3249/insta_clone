import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  SkeletonCircle,
  Text,
  Tooltip,
  // SkeletonText,
  // Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";

import UseGetFeedPosts from "../../Hooks/UseGetFeedPosts";
import useAuthStore from "../../store/AuthStore";
import nature1 from "../../../public/nature-1.jpg";
import nature2 from "../../../public/nature-2.jpg";
import nature3 from "../../../public/nature-3.jpg";
import { BsThreeDots } from "react-icons/bs";
import {
  CommentLogo,
  NotificationsLogo,
} from "../../../public/Assets/icons/constants";
import { TfiSave, TfiSharethis } from "react-icons/tfi";
import { BeatLoader } from "react-spinners";

const postData = [
  {
    avtarUrl: "https://bit.ly/dan-abramov",
    username: "Kent Dodds",
    time: "2 days",
    imageUrl: nature1,
    likeCount: "2",
    commentCount: "4",
  },
  {
    avtarUrl: "https://bit.ly/tioluwani-kolawole",
    username: "Dan Abrahmov",
    time: "3 days",
    imageUrl: nature2,
    likeCount: "3",
    commentCount: "1",
  },
  {
    avtarUrl: "https://bit.ly/kent-c-dodds",
    username: "Kola Tioluwani",
    time: "4 days",
    imageUrl: nature3,
    likeCount: "1",
    commentCount: "2",
  },
];

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
      {postData.map((item, i) => (
        <Box key={i}>
          {/* header */}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            {/* left side */}
            <Flex
              width={"100%"}
              alignItems={"center"}
              gap={4}
              cursor={"pointer"}
            >
              <>
                <Box>
                  <Avatar src={item.avtarUrl} size={"md"} />
                </Box>

                <Box>{item.username}</Box>
                <Box color={"gray.500"}>•{item.time} ago</Box>
              </>
            </Flex>

            {/* right side */}
            <Box
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
              }}
              cursor={"pointer"}
            >
              <BsThreeDots size={30} />
            </Box>
          </Flex>
          {/* image  */}

          <Box
            border={"1px solid white "}
            borderRadius={"5px"}
            overflow={"hidden"}
            mt={2}
          >
            <Image
              src={item.imageUrl}
              cursor={"pointer"}
              borderRadius={"10px"}
              objectFit={{ base: "contain", md: "fill" }}
            />
          </Box>
          {/* post footer */}

          <Box mb={4} mt={2} display={"flex"} flexDirection={"column"} gap={1}>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={4}
              cursor={"pointer"}
              my={1}
            >
              <Flex gap={4}>
                <Box fontSize={50}>
                  <NotificationsLogo />
                </Box>
                <Box>
                  <CommentLogo />
                </Box>

                <Box>
                  <TfiSharethis size={25} />
                </Box>
              </Flex>

              <Tooltip
                label={"Save"}
                aria-label="A tooltip "
                ml={1}
                placement="right-start"
                hasArrow
              >
                <Box>
                  <TfiSave size={25} />
                </Box>
              </Tooltip>
            </Flex>
            <Text fontSize={"bold"}>{item.likeCount} Likes</Text>

            <>
              <Text fontSize={"sm"}>
                {item.username}
                <Text as={"span"} color={"gray"} ml={2}>
                  Feels good
                </Text>
              </Text>

              <Text fontSize={"sm"}>
                View all {item.commentCount}
                <Text as={"span"} cursor={"pointer"}>
                  comments
                </Text>
              </Text>
            </>

            <Flex align={"Center"} justifyContent={"space-between"}>
              <InputGroup>
                <Input
                  variant="flushed"
                  placeholder={"Add comment"}
                  fontSize={20}
                />
                <InputRightElement width="4.5rem" fontSize={"10px"}>
                  <Button
                    h="1.75rem"
                    size="sm"
                    _hover={{ color: "blue.500" }}
                    spinner={<BeatLoader size={8} color="white" />}
                  >
                    Post
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};
