import {
  Box,
  Flex,
  Text,
  Divider,
  Spinner,
  Image,
  Stack,
  HStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { LuSearch } from "react-icons/lu";
import UseSearchUser from "../../Hooks/UseSearchUser";
import { BeatLoader } from "react-spinners";
import UseFollowUser from "../../Hooks/UseFollowUser";
import useAuthStore from "../../store/AuthStore";
import { Link } from "react-router-dom";
import { UserProfileStore } from "../../store/UserProfileStore";

const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const [isShow, setIsShow] = useState(false);
  const { user } = useAuthStore();
  const { userProfile } = UserProfileStore();
  const { loading, getUserProfile } = UseSearchUser(userName);
  const { handleFollowUser, isUpdating, isFollowing } = UseFollowUser(
    userProfile?.uid
  );

  const handleSearchUser = () => {
    if (userName) {
      getUserProfile();
    }
  };

  const followUnFollowUser = () => {
    handleFollowUser();
  };

  return (
    <Flex flexDir={"column"}>
      {/* top section */}
      <Flex flexDir={"column"}>
        <Text fontSize={"24px"} fontWeight={"bolder"} pl={5} mt={4}>
          Search
        </Text>
        <Box
          display={"flex"}
          alignItems={"center"}
          border={"1px solid gray"}
          borderRadius={"5px"}
          gap={2}
          mt={10}
          mb={3}
          mx={4}
          py={2}
          px={3}
          onFocus={() => setIsShow(true)}
          onKeyDown={handleSearchUser}
        >
          {!isShow && <LuSearch size={25} />}
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "100%",
              outline: "none",
              backgroundColor: "transparent",
            }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          {isShow && (
            <>
              {loading ? (
                <Spinner color="red.500" size={"xs"} />
              ) : (
                <ImCross
                  size={15}
                  onClick={() => {
                    setIsShow(!isShow);
                    setUserName("");
                  }}
                />
              )}
            </>
          )}
        </Box>
        <Divider orientation="horizontal" />
      </Flex>

      {/* bottom section */}
      {loading ? (
        <SearchUserSkeleton />
      ) : (
        <Box py={4} px={4} fontSize={"20px"} cursor={"pointer"}>
          Recent
          {/* search user result */}
          {userProfile && user?.uid !== userProfile?.uid && (
            <Flex justifyContent={"space-between"}>
              {/* left side */}
              <Flex gap={2} alignItems={"center"}>
                <Link to={userProfile?.username}>
                  <Image
                    src={
                      userProfile?.profilePicUrl || "https://bit.ly/dan-abramov"
                    }
                    width={10}
                    height={10}
                    borderRadius={"100%"}
                    // onClick={()=>}
                  />
                </Link>
                <Box display={"flex"} flexDir={"column"} color={"gray"}>
                  {/* username */}
                  <Box fontSize={"16px"}>{userProfile?.fullName}</Box>
                  {/* followers */}
                  <Box fontSize={"14px"}>
                    {userProfile?.followers.length} Followers
                  </Box>
                </Box>
              </Flex>
              {/* right side */}
              <Box
                fontSize={"16px"}
                color={"blue.400"}
                cursor={"pointer"}
                onClick={followUnFollowUser}
              >
                {isFollowing ? (
                  <Box color={"gray"} fontWeight={500}>
                    {isUpdating ? (
                      <BeatLoader size={8} color="white" />
                    ) : (
                      "Following"
                    )}
                  </Box>
                ) : (
                  <Box>
                    {isUpdating ? (
                      <BeatLoader size={8} color="white" />
                    ) : (
                      "Follow"
                    )}
                  </Box>
                )}
              </Box>
            </Flex>
          )}
        </Box>
      )}
    </Flex>
  );
};

const SearchUserSkeleton = () => {
  return (
    <Flex px={4} mt={5} alignItems={"center"} gap={4}>
      <SkeletonCircle height={8} width={10} borderRadius={"full"} />
      <Skeleton height="17px" width={"90%"} />
    </Flex>
  );
};

export default SearchUser;
