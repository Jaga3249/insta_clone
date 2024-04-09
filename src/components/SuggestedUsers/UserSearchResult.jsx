import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import UseFollowUser from "../../Hooks/UseFollowUser";
import useAuthStore from "../../store/AuthStore";
import { BeatLoader } from "react-spinners";
import { BiSolidHandRight } from "react-icons/bi";
import { RiUserUnfollowFill } from "react-icons/ri";

const UserSearchResult = ({ suggesteduser, setUser }) => {
  const { user } = useAuthStore();
  const { handleFollowUser, isUpdating, isFollowing } = UseFollowUser(
    suggesteduser.uid
  );

  const onFollowUser = async () => {
    await handleFollowUser();
  };

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        mt={3}
      >
        <Flex gap={3} alignItems={"center"} justifyContent={"center"}>
          <Avatar
            src={suggesteduser.profilePicUrl}
            width={"40px"}
            height={"40px"}
          />
          <VStack spacing={0} alignItems={"start"} justifyContent={"center"}>
            <Box fontSize={14} color={"gray"}>
              {suggesteduser.fullName}
            </Box>
            <Box fontSize={14} color={"gray"}>
              {suggesteduser.followers.length} followers
            </Box>
          </VStack>
        </Flex>

        {suggesteduser.uid !== user.uid && (
          <Button
            onClick={onFollowUser}
            fontSize={16}
            color={"blue.400"}
            cursor={"pointer"}
            spinner={<BeatLoader size={8} color="white" />}
            isLoading={isUpdating}
            size={"sm"}
          >
            {isFollowing ? "unfollow" : "Follow"}
          </Button>
        )}
      </Flex>
    </>
  );
};
export default UserSearchResult;
