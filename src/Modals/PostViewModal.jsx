import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import Comment from "../components/Comment/Comment";
import PostFooter from "../components/FeedPosts/PostFooter";
import useAuthStore from "../store/AuthStore";
import { UserProfileStore } from "../store/UserProfileStore";
import Caption from "../components/Comment/Caption";
import { OverlayOne } from "../components/Profile/ProfilePost";

const PostViewModal = ({
  onClose,
  isOpen,
  postViewOverlay,
  post,
  setOpen,
  setDeleteModalOpen,
  setPostToBeDelete,
  setOverlay,
}) => {
  const { userProfile } = UserProfileStore();
  const { user } = useAuthStore();

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
    setPostToBeDelete(post);
    setOverlay(<OverlayOne />);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "xs", md: "2xl" }}
        closeOnOverlayClick={true}
      >
        {postViewOverlay}

        <ModalContent>
          <ModalCloseButton
            color={"wheat"}
            fontSize={"20px"}
            onClick={() => setOpen(false)}
            display={{ base: "block", md: "none" }}
          />
          {user?.uid === userProfile.uid && (
            <Box
              position={"absolute"}
              top={4}
              left={3}
              color={"#cb4949"}
              display={{ base: "block", md: "none" }}
            >
              <AiOutlineDelete size={25} onClick={handleDeleteClick} />
            </Box>
          )}
          <Flex
            flexDir={{ base: "column", md: "row" }}
            gap={4}
            w={{ base: "full", sm: "70%", md: "full" }}
          >
            {/* left side */}
            <Box w={"full"}>
              <Image
                src={post.imageUrl}
                w={"full"}
                h={"full"}
                borderRadius={"5px"}
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
                    <AiOutlineDelete size={25} onClick={handleDeleteClick} />
                  )}

                  <IoIosClose size={25} onClick={() => setOpen(false)} />
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
    </>
  );
};

export default PostViewModal;
