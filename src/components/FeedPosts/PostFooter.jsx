import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../../public/Assets/icons/constants";

import UsePostComment from "../../Hooks/UsePostComment";
import { BeatLoader } from "react-spinners";
import UseLikePost from "../../Hooks/UseLikePost";
import CommentModal from "../../Modals/CommentModal";
import { TfiSave, TfiSharethis } from "react-icons/tfi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import UseSavePosts from "../../Hooks/UseSavePosts";

const PostFooter = ({ post, creatorProfile, isProfilePage }) => {
  const { handleSavePost, isSaved } = UseSavePosts(post);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handlePostComment, isCommenting } = UsePostComment();
  const { likes, isLiked, handleLike } = UseLikePost(post);
  const commentRef = useRef(null);

  const [comment, setComment] = useState("");

  // post comment
  const handleSubmit = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };
  //post comment on enter key press
  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await handlePostComment(post.id, comment);
      setComment("");
    }
  };

  return (
    <>
      <Box mb={4} display={"flex"} flexDirection={"column"} gap={1}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={4}
          cursor={"pointer"}
          my={1}
        >
          <Flex gap={4}>
            <Box onClick={handleLike} fontSize={50}>
              {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
            </Box>
            <Box onClick={() => commentRef.current.focus()}>
              <CommentLogo />
            </Box>

            <Box>
              <TfiSharethis size={25} />
            </Box>
          </Flex>

          <Tooltip
            label={`${isSaved ? "Remove" : "Save"}`}
            aria-label="A tooltip "
            ml={1}
            placement="right-start"
            hasArrow
          >
            <Box>
              <TfiSave
                size={25}
                onClick={handleSavePost}
                style={{
                  color: `${isSaved ? "gray" : "white"}`,
                }}
              />
            </Box>
          </Tooltip>
        </Flex>
        <Text fontSize={"bold"}>{likes} Likes</Text>
        {!isProfilePage && (
          <>
            <Text fontSize={"sm"}>
              {creatorProfile?.username}{" "}
              <Text as={"span"} color={"gray"}>
                Feels good
              </Text>
            </Text>
            {post.comments.length > 0 && (
              <Text fontSize={"sm"}>
                View all {post.comments.length}{" "}
                <Text as={"span"} cursor={"pointer"} onClick={onOpen}>
                  comments
                </Text>
              </Text>
            )}
          </>
        )}
        <Flex align={"Center"} justifyContent={"space-between"}>
          <InputGroup>
            <Input
              variant="flushed"
              placeholder={"Add comment"}
              fontSize={20}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              ref={commentRef}
              onKeyDown={handleKeyPress}
            />
            <InputRightElement width="4.5rem" fontSize={"10px"}>
              <Button
                h="1.75rem"
                size="sm"
                _hover={{ color: "blue.500" }}
                onClick={handleSubmit}
                isLoading={isCommenting}
                spinner={<BeatLoader size={8} color="white" />}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
      {isOpen && <CommentModal onClose={onClose} isOpen={isOpen} post={post} />}
    </>
  );
};

export default PostFooter;
