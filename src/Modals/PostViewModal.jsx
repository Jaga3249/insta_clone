import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import Comment from "../components/Comment/Comment";
import PostFooter from "../components/FeedPosts/PostFooter";
import useAuthStore from "../store/AuthStore";
import { UserProfileStore } from "../store/UserProfileStore";

import { OverlayOne } from "../components/Profile/ProfilePost";
import Caption from "../components/Comment/Caption";

const PostViewModal = ({
  isOpen,
  onClose,
  post,
  onOpen,
  setSelectedItem,
  setOverlay,
  postViewOverlay,
  setPostToBeDelete,
}) => {
  //
  const { userProfile } = UserProfileStore();
  const { user } = useAuthStore();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={true}
      size={{ base: "sm", md: "2xl" }}
      closeOnOverlayClick={false}
    >
      {postViewOverlay}

      <ModalContent>
        <Flex gap={4} w={{ base: "full", sm: "70%", md: "full" }}>
          {/* left side */}
          <Box w={"full"}>
            <Image
              src={post.imageUrl}
              w={"full"}
              h={"full"}
              borderRadius={"5px"}
              overflow={"hidden"}
            />
          </Box>

          {/* right side */}
          <VStack w={"full"} display={{ base: "none", md: "block" }}>
            {/* top header */}
            <Flex
              w={"full"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={2}
              cursor={"pointer"}
            >
              {/* header left */}
              <Flex alignItems={"center"} gap={5}>
                <Avatar src={userProfile.profilePicUrl} />
                <Text as={"span"}>{userProfile.username}</Text>
              </Flex>
              {/* header right */}
              <Flex alignItems={"center"} gap={5}>
                {user?.uid === userProfile.uid && (
                  <AiOutlineDelete
                    size={25}
                    onClick={() => {
                      setPostToBeDelete(post);

                      setSelectedItem("deletePost");
                      setOverlay(<OverlayOne />);
                      onOpen();
                    }}
                  />
                )}

                <IoIosClose size={25} onClick={onClose} />
              </Flex>
            </Flex>
            <Divider orientation="horizontal" my={1} />
            {/*   comment section */}
            <Flex
              justifyContent={"flex-start"}
              flexDirection={"column"}
              w={"full"}
              h={"200px"}
              overflow={"auto"}
            >
              {/* captions */}
              {post.caption && <Caption post={post} />}

              {/* comments */}
              {post.comments.map((comment, i) => (
                <Comment comment={comment} key={i} />
              ))}
            </Flex>
            <Divider orientation="horizontal" my={1} />
            {/* footer */}
            <Box
              // border={"2px solid red"}
              mx={2}
              pt={"auto"}
            >
              <PostFooter isProfilePage={true} post={post} />
            </Box>
          </VStack>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default PostViewModal;
