import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import UseDeletePost from "../Hooks/UseDeletePost";
import { BeatLoader } from "react-spinners";

const DeletePostModal = ({ isOpen, onClose, overlay, post }) => {
  const { handledeletePost, isDelete } = UseDeletePost();

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size={"sm"}
      closeOnOverlayClick={false}
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
          <Button colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default DeletePostModal;
