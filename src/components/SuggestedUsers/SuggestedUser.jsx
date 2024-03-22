import { Avatar, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UseFollowUser from "../../Hooks/UseFollowUser";
import { BeatLoader } from "react-spinners";
import { BiSolidHandRight } from "react-icons/bi";
import useAuthStore from "../../store/AuthStore";
import { RiUserUnfollowFill } from "react-icons/ri";

const SuggestedUser = ({ suggesteduser, setUser }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const { handleFollowUser, isUpdating } = UseFollowUser(suggesteduser.uid);
  const { user } = useAuthStore();
  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...suggesteduser,
      followers: isFollowing
        ? suggesteduser.following.filter((uid) => uid !== user.uid)
        : [...suggesteduser.followers, user.uid],
    });
  };
  useEffect(() => {
    if (suggesteduser) {
      const follow = suggesteduser.followers.includes(user.uid);
      setIsFollowing(follow);
    }
  }, [isFollowing, suggesteduser]);

  return (
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
          rightIcon={
            isFollowing ? (
              <RiUserUnfollowFill />
            ) : (
              <BiSolidHandRight size={20} />
            )
          }
        >
          {isFollowing ? "unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
