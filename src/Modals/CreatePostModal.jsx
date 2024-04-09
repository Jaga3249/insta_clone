import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { FcGallery } from "react-icons/fc";
import { useRef, useState } from "react";
import UsePreviewImg from "../Hooks/UsePreviewImg";
import { CloseButton } from "@chakra-ui/react";
import UseCreatePost from "../Hooks/UseCreatePost";
import { BeatLoader } from "react-spinners";

const CreatePostModal = ({ isopen, onClose }) => {
  const [captions, setCaptions] = useState("");
  const fileRef = useRef(null);
  const { selectedFile, setSelectedFile, handleChangeImg } = UsePreviewImg();
  const { handleCreatePost, loading } = UseCreatePost();

  // console.log("selectedFile", selectedFile);

  return (
    <>
      <Modal isOpen={isopen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody cursor={"pointer"}>
            <Textarea
              value={captions}
              onChange={(e) => setCaptions(e.target.value)}
              placeholder="Post Captions"
              size="sm"
              mb={2}
            />
            <input
              type="file"
              hidden
              ref={fileRef}
              onChange={handleChangeImg}
            />
            <FcGallery size={30} onClick={() => fileRef.current.click()} />
            {selectedFile && (
              <>
                <Flex justifyContent={"center"} position={"relative"}>
                  <Image
                    src={selectedFile}
                    objectFit={"fill"}
                    alt="select an image"
                  />

                  <CloseButton
                    size="sm"
                    position={"absolute"}
                    top={"0px"}
                    right={"10px"}
                    onClick={() => setSelectedFile("")}
                  />
                </Flex>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={async () => {
                await handleCreatePost(
                  selectedFile,
                  setSelectedFile,
                  captions,
                  setCaptions
                );
                onClose();
              }}
              isLoading={loading}
              spinner={<BeatLoader size={8} color="white" />}
              size={"sm"}
              width={"100%"}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreatePostModal;
