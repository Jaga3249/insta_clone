import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import { SearchLogo } from "../../../public/Assets/icons/constants";
import { useRef } from "react";
import UseSearchUser from "../../Hooks/UseSearchUser";
import { BeatLoader } from "react-spinners";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";
import UserSearchResult from "../SuggestedUsers/UserSearchResult";
import { UserProfileStore } from "../../store/UserProfileStore";
import SearchDrawer from "../../drawer/SearchDrawer";
// import UserSearchResult from "../SuggestedUsers/userSearchResult";

const Search = ({
  setIsSelected,
  setSelectedItemName,
  isSelected,
  selectedItemName,
}) => {
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

  //
  const handleChange = () => {
    setIsSelected(!isSelected);
    // setSelectedItemName("Search");
  };

  // console.log(isSelected);
  // console.log(isOpen);

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={{
          base: "center",
          sm: `${
            isSelected && selectedItemName === "Search" ? "center" : "start"
          }`,
        }}
        gap={2}
        _hover={{ bg: "whiteAlpha.500" }}
        py={2}
        px={1}
        borderRadius={"5px"}
        border={`${
          isSelected && selectedItemName === "Search" && "1px solid white"
        }`}
        cursor={"pointer"}
        // onClick={onOpen}
        onClick={handleChange}
      >
        <SearchLogo />
        <Box
          display={{
            base: "none",
            md: `${
              isSelected && selectedItemName === "Search" ? "none" : "block"
            }`,
          }}
        >
          Search
        </Box>
      </Flex>

      {/* search drawer */}

      <SearchDrawer isOpen={isSelected} onClose={onClose} />
    </>
  );
};
export default Search;
