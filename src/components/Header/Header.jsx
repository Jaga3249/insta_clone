import { Box, Flex, Image, Spinner } from "@chakra-ui/react";
import {
  InstagramLogo,
  NotificationsLogo,
} from "../../../public/Assets/icons/constants";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import UseSearchUser from "../../Hooks/UseSearchUser";
import { ImCross } from "react-icons/im";
import { UserProfileStore } from "../../store/UserProfileStore";
import { BeatLoader } from "react-spinners";
import UseFollowUser from "../../Hooks/UseFollowUser";
import useAuthStore from "../../store/AuthStore";
import { Link } from "react-router-dom";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [isShow, setIsShow] = useState(false);
  const { loading, getUserProfile } = UseSearchUser(userName);
  const { userProfile } = UserProfileStore();
  const { handleFollowUser, isUpdating, isFollowing } = UseFollowUser(
    userProfile?.uid
  );
  const { user } = useAuthStore();

  const handleSearchUser = () => {
    if (userName) {
      getUserProfile();
    }
  };
  const followUnFollowUser = () => {
    handleFollowUser();
  };
  return (
    <Flex
      flexDirection={"column"}
      // alignItems={"center"}
      justifyContent={"space-between"}
      px={5}
      gap={3}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        border={"1px solid gray"}
        borderRadius={"5px"}
        gap={2}
        py={1}
        px={2}
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

      {/* search user result */}
      {userProfile && user?.uid !== userProfile?.uid && (
        <Flex justifyContent={"space-between"} px={2}>
          {/* left side */}
          <Flex gap={2} alignItems={"center"}>
            <Link to={userProfile?.username}>
              <Image
                src={userProfile?.profilePicUrl || "https://bit.ly/dan-abramov"}
                width={10}
                height={10}
                borderRadius={"100%"}
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
                {isUpdating ? <BeatLoader size={8} color="white" /> : "Follow"}
              </Box>
            )}
          </Box>
        </Flex>
      )}
    </Flex>
  );
};
export default Header;
