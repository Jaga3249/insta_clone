import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";

import { SearchLogo } from "../../Assets/icons/constants";
import { useRef } from "react";
import UseSearchUser from "../../Hooks/UseSearchUser";
import { BeatLoader } from "react-spinners";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";
import UserSearchResult from "../SuggestedUsers/UserSearchResult";
import { UserProfileStore } from "../../store/UserProfileStore";
// import UserSearchResult from "../SuggestedUsers/userSearchResult";

const Search = () => {
  const { loading, getUserProfile, user, setUser } = UseSearchUser();
  const { userProfile, setUserProfile } = UserProfileStore();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef = useRef(null);

  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getUserProfile(searchRef.current.value);
    }
  };

  const handleModalClose = () => {
    setUserProfile(null);
    onClose();
  };

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
        <SearchLogo />
        <Box display={{ base: "none", md: "block" }}>Search</Box>
      </Flex>

      {/* search modal content */}

      <Modal isOpen={isOpen} onClose={onClose}>
        {/* <ModalOverlay /> */}
        <ModalContent>
          <ModalHeader mx={"auto"}>Search User</ModalHeader>
          <ModalCloseButton onClick={handleModalClose} />
          <ModalBody>
            <form onSubmit={handleSearchUser}>
              <FormLabel>UserName</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type="text"
                  placeholder="Enter username"
                  ref={searchRef}
                  onKeyDown={handleKeyPress}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    colorScheme="messenger"
                    h="2.12rem"
                    size="sm"
                    spinner={<BeatLoader size={8} color="white" />}
                    isLoading={loading}
                    type="submit"
                  >
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>
            </form>
            {userProfile && (
              <UserSearchResult
                suggesteduser={userProfile}
                setUser={setUserProfile}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Search;
