import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useAuthStore from "../../store/AuthStore";
import UsePreviewImg from "../../Hooks/UsePreviewImg";
import UseEditProfile from "../../Hooks/UseEditProfile";
import { toast } from "react-toastify";

const EditProfile = ({ isopen, onClose }) => {
  const fileref = useRef(null);
  const { user } = useAuthStore();
  const initialState = {
    fullName: "",
    userName: "",
    bio: "",
  };
  const prevprofileData = {
    fullName: user.fullName,
    userName: user.username,
    bio: user.bio,
  };
  const [prevProfileInfo, setPrevProfileInfo] = useState(prevprofileData);
  const [profileEditData, setProfileEditData] = useState(initialState);
  const { selectedFile, setSelectedFile, handleChangeImg } = UsePreviewImg();
  const { editProfile, isUpdating } = UseEditProfile();

  const handleProfileData = (e) => {
    const { name, value } = e.target;
    if (["fullName", "userName", "bio"].includes(name)) {
      setPrevProfileInfo((prevData) => ({
        ...prevData,
        [name]: value === "" ? "" : prevData[name],
      }));
    }
    setProfileEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // update profile
  const handleSubmit = async () => {
    try {
      await editProfile(profileEditData, selectedFile);
      setSelectedFile(null);
      onClose();
      toast.success("user profile update sucessfully");
    } catch (error) {
      console.log(error);
      toast.info("Something Went Wrong");
    }
  };

  // update profile while press the enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  // console.log("selectedFile", selectedFile);
  return (
    <Modal isOpen={isopen} onClose={onClose}>
      <ModalContent py={6}>
        <ModalCloseButton />
        <ModalBody>
          <Box fontWeight={"bold"} fontSize={"20px"} mb={1} pl={4}>
            Edit Profile
          </Box>
          <VStack gap={2}>
            <Flex
              alignItems={"center"}
              width={"100%"}
              gap={2}
              justifyContent={"center"}
            >
              <Avatar
                src={selectedFile || user.profilePicUrl}
                size={"lg"}
                cursor={"pointer"}
              />
              <Button
                colorScheme="gray"
                width={"70%"}
                size={"md"}
                onClick={() => fileref.current.click()}
              >
                Edit ProfilePicture
              </Button>
              <input
                type="file"
                hidden
                ref={fileref}
                onChange={handleChangeImg}
              />
            </Flex>
            <Flex flexDirection={"column"} width={"100%"} gap={4} pl={4}>
              <Input
                variant="flushed"
                placeholder="FullName"
                name="fullName"
                value={profileEditData.fullName || prevProfileInfo.fullName}
                onChange={handleProfileData}
              />
              <Input
                variant="flushed"
                placeholder="UserName"
                name="userName"
                value={profileEditData.userName || prevProfileInfo.userName}
                onChange={handleProfileData}
              />
              <Input
                variant="flushed"
                placeholder="Bio"
                name="bio"
                value={profileEditData.bio || prevProfileInfo.bio}
                onChange={handleProfileData}
                onKeyDown={handleKeyPress}
              />
            </Flex>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            colorScheme="red"
            onClick={onClose}
            width={"100%"}
            size={"md"}
          >
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            width={"100%"}
            size={"md"}
            onClick={handleSubmit}
            isLoading={isUpdating}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default EditProfile;
