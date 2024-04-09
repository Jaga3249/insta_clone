import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  VStack,
  Divider,
} from "@chakra-ui/react";
import UseFollowUser from "../Hooks/UseFollowUser";
import { BeatLoader } from "react-spinners";
import UseSavePosts from "../Hooks/UseSavePosts";

const UserPostModal = ({ isOpen, onClose, post, setOpen }) => {
  const { handleSavePost, loading, isSaved } = UseSavePosts(post);
  const { handleFollowUser, isUpdating, isFollowing } = UseFollowUser(
    post?.createdBy
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <VStack spacing={3} align="stretch" cursor="pointer">
            <Box
              mx="auto"
              fontSize={"16px"}
              color={"rgb(235 70 83)"}
              onClick={handleFollowUser}
              fontWeight={"600"}
            >
              {isFollowing && isUpdating ? (
                <BeatLoader size={8} color="white" />
              ) : (
                "UnFollow"
              )}
            </Box>

            <Divider />
            <Box mx="auto" onClick={handleSavePost}>
              {isSaved ? (
                <Box>
                  {loading ? (
                    <BeatLoader size={8} color="white" />
                  ) : (
                    "Remove Save Posts"
                  )}
                </Box>
              ) : (
                <Box>
                  {loading ? (
                    <BeatLoader size={8} color="white" />
                  ) : (
                    " Save Post"
                  )}
                </Box>
              )}
            </Box>
            <Divider />
            <Box mx="auto" onClick={() => setOpen(false)}>
              Cancel
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default UserPostModal;
