import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import UsePostComment from "../Hooks/UsePostComment";
import { BeatLoader } from "react-spinners";
import Comment from "../components/Comment/Comment";

const CommentModal = ({ onClose, isOpen, post }) => {
  const commentContainerRef = useRef(null);
  const { handlePostComment, isCommenting } = UsePostComment();
  const [comment, setComment] = useState("");

  //   post comment
  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await handlePostComment(post.id, comment);
      setComment("");
    }
  };
  useEffect(() => {
    const scrollToBottom = () => {
      if (commentContainerRef?.current) {
        commentContainerRef.current.scrollIntoView({ block: "end" });
      }
    };
    if (isOpen) {
      scrollToBottom();
    }

    // Scroll to bottom when the component mounts or when new comments are added
  }, [post.comments, isOpen]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comments</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              flexDirection={"column"}
              gap={1}
              maxH={"200px"}
              overflow={"auto"}
              mb={6}
              ref={commentContainerRef}
            >
              {post.comments.map((comment, i) => (
                <Comment comment={comment} key={i} />
              ))}
            </Flex>

            <Input
              placeholder="Comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Button
              colorScheme="blue"
              width={"100%"}
              my={4}
              onClick={() => handlePostComment(post.id, comment)}
              isLoading={isCommenting}
              spinner={<BeatLoader size={8} color="white" />}
            >
              Post
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      ;
    </>
  );
};
export default CommentModal;
