import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

import profilePhoto from "../../../public/profilepic.png";
import { IoIosClose } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";
import { UserProfileStore } from "../../store/UserProfileStore";
import useAuthStore from "../../store/AuthStore";
import DeletePostModal from "../../Modals/DeletePostModal";
import PostViewModal from "../../Modals/PostViewModal";

const ProfilePost = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [selectedItem, setSelectedItem] = useState("");
  const [postToBeDelete, setPostToBeDelete] = useState(null);

  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [postViewOverlay, setPostViewOverlay] = useState(<OverlayTwo />);
  const { onClose, isOpen } = useDisclosure();

  return (
    <>
      <GridItem
        onClick={() => {
          setOpen(true);

          setPostViewOverlay(<OverlayTwo />);
        }}
        gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
        // gap={10}
        columnGap={1}
        cursor={"pointer"}
        borderRadius={"6px"}
        aspectRatio={1 / 1}
        position={"relative"}
      >
        <Flex
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          justifyContent={"center"}
          opacity={0}
          _hover={{ opacity: 1 }}
          bg={"blackAlpha.700"}
          transition={"all 0.2s ease "}
          zIndex={1}
          gap={30}
          alignItems={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Box>
              <AiFillHeart size={25} />
            </Box>
            <Text fontSize={"15px"}>{post.likes.length}</Text>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Box>
              <FaComment size={25} />
            </Box>
            <Text fontSize={"15px"}>{post.comments.length}</Text>
          </Flex>
        </Flex>
        <Image
          src={post.imageUrl}
          alt="Profile Photo"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
          border={"1px solid gray"}
          borderRadius={"5px"}
          mb={3}
        />
      </GridItem>
      {/* postview modal */}

      <PostViewModal
        onClose={onClose}
        isOpen={open}
        postViewOverlay={postViewOverlay}
        post={post}
        setOpen={setOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        setPostToBeDelete={setPostToBeDelete}
        setOverlay={setOverlay}
      />

      <DeletePostModal
        isOpen={deleteModalOpen}
        onClose={onClose}
        setDeleteModalOpen={setDeleteModalOpen}
        overlay={overlay}
        post={postToBeDelete}
      />
    </>
  );
};
export const OverlayOne = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

export const OverlayTwo = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

export default ProfilePost;
