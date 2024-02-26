import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

import profilePhoto from "../../../public/profilepic.png";
import { IoIosClose } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(true);

  return (
    <>
      <GridItem
        onClick={onOpen}
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }}
        gap={1}
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
            <Text fontSize={"15px"}>7</Text>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Box>
              <FaComment size={25} />
            </Box>
            <Text fontSize={"15px"}>7</Text>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="Profile Photo"
          w={"100%"}
          h={"100%"}
          objectFit={"fill"}
        />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "sm", md: "2xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <Flex gap={4} w={{ base: "full", sm: "70%", md: "full" }}>
            {/* left side */}
            <Box w={"full"}>
              <Image
                src={img}
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
                  <Avatar src={profilePhoto} />
                  <Text as={"span"}>Pogrammer</Text>
                </Flex>
                {/* header right */}
                <Flex alignItems={"center"} gap={5}>
                  <AiOutlineDelete size={25} />
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
                <Comment
                  avatar="https://bit.ly/dan-abramov"
                  userName="Dan Abrahmov"
                  createdAt="10 days ago"
                  commentMsg="Nice Picture"
                />
                <Comment
                  avatar="https://bit.ly/kent-c-dodds"
                  userName="Kent Dodds"
                  createdAt="10 days ago"
                  commentMsg="Nice Picture"
                />
                <Comment
                  avatar="https://bit.ly/ryan-florence"
                  userName="Ryan Florence"
                  createdAt="10 days ago"
                  commentMsg="Nice Picture"
                />
              </Flex>
              <Divider orientation="horizontal" my={1} />
              {/* footer */}
              <Box
                // border={"2px solid red"}
                mx={2}
                pt={"auto"}
              >
                <PostFooter isProfilePage={true} />
              </Box>
            </VStack>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
