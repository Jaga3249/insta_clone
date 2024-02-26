import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../Assets/icons/constants";

const PostFooter = ({ userName, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const handleLiked = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={4}>
      <Flex alignItems={"center"} gap={4} cursor={"pointer"} my={1}>
        <Box onClick={handleLiked} fontSize={50}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize={"bold"}>{likes} Likes</Text>
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"}>
            {userName}{" "}
            <Text as={"span"} color={"gray"}>
              Feels good
            </Text>
          </Text>
          <Text fontSize={"sm"}>View all 1000 comments</Text>
        </>
      )}
      <Flex align={"Center"} justifyContent={"space-between"}>
        <InputGroup>
          <Input variant="flushed" placeholder={"Add comment"} fontSize={20} />
          <InputRightElement width="4.5rem" fontSize={"10px"}>
            <Button h="1.75rem" size="sm" _hover={{ color: "blue.500" }}>
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
