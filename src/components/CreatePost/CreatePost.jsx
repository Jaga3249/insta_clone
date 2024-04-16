import { Flex, Box, Textarea, Button, Image } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FcGallery } from "react-icons/fc";
import UsePreviewImg from "../../Hooks/UsePreviewImg";
import { IoCloseSharp } from "react-icons/io5";
import UseCreatePost from "../../Hooks/UseCreatePost";
import { BeatLoader } from "react-spinners";

const CreatePost = () => {
  const [captions, setCaptions] = useState("");
  const imgRef = useRef(null);
  const { selectedFile, setSelectedFile, handleChangeImg } = UsePreviewImg();
  const { handleCreatePost, loading, userProfile } = UseCreatePost();
  console.log("userprofile", userProfile);
  console.log("loading", loading);
  return (
    <Flex flexDir={"column"} gap={3}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        fontSize={"30px"}
        fontWeight={"bolder"}
        marginTop={"25px"}
        width={"100%"}
        cursor={"pointer"}
      >
        Create Post
      </Box>
      <Box px={4}>
        <Textarea
          placeholder="Post Captions"
          value={captions}
          onChange={(e) => setCaptions(e.target.value)}
        />
      </Box>
      <Box mx={4} cursor={"pointer"}>
        <FcGallery size={35} onClick={() => imgRef.current.click()} />
        <Box as="span" display={"none"}>
          <input type="file" ref={imgRef} onChange={handleChangeImg} />
        </Box>
      </Box>
      {selectedFile && (
        <Box height={"30vh"} mx={4} objectFit={"cover"} position={"relative"}>
          <Image
            src={selectedFile}
            alt="selected image"
            width={"100%"}
            height={"100%"}
            objectFit={"fill"}
          />
          <Box
            as="span"
            position={"absolute"}
            top={"-30px"}
            right={0}
            cursor={"pointer"}
          >
            <IoCloseSharp
              fontSize={"35px"}
              onClick={() => setSelectedFile(null)}
            />
          </Box>
        </Box>
      )}

      <Button
        colorScheme="teal"
        size="md"
        mx={4}
        onClick={() =>
          handleCreatePost(selectedFile, setSelectedFile, captions, setCaptions)
        }
        isLoading={loading}
        spinner={<BeatLoader size={8} color="white" />}
      >
        Post
      </Button>
    </Flex>
  );
};
export default CreatePost;
