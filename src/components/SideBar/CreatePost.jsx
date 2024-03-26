import { Box, Flex, Tooltip, useDisclosure } from "@chakra-ui/react";
import { CreatePostLogo } from "../../../public/Assets/icons/constants";
import { Link, Link as RouterLink } from "react-router-dom";
import CreatePostModal from "../../Modals/CreatePostModal";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={{ base: "center", sm: "start" }}
        gap={2}
        _hover={{ bg: "whiteAlpha.500" }}
        py={2}
        px={1}
        borderRadius={"5px"}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <CreatePostLogo />
        <Box display={{ base: "none", md: "block" }}>Create</Box>
      </Flex>
      {isOpen && <CreatePostModal isopen={isOpen} onClose={onClose} />}
    </>
  );
};
export default CreatePost;
