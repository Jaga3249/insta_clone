import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import UseDeletePost from "../Hooks/UseDeletePost";
import { BeatLoader } from "react-spinners";

const DeletePostModal = ({
  isOpen,
  onClose,
  setDeleteModalOpen,
  overlay,
  post,
}) => {
  const { handledeletePost, isDelete } = UseDeletePost();

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={() => setDeleteModalOpen(false)}
      size={{ base: "xs", md: "sm" }}
    >
      {overlay}
      <ModalContent>
        <ModalHeader>Are you sure to delete post</ModalHeader>
        <ModalCloseButton />

        <ModalFooter display={"flex"} gap={4}>
          <Button
            colorScheme="blue"
            isLoading={isDelete}
            onClick={async () => {
              await handledeletePost(post);

              onClose();
            }}
            spinner={<BeatLoader size={8} color="white" />}
          >
            Confirm
          </Button>
          <Button colorScheme="red" onClick={() => setDeleteModalOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default DeletePostModal;
