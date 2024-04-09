import { Avatar, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UseFollowUser from "../../Hooks/UseFollowUser";
import { BeatLoader } from "react-spinners";
import useAuthStore from "../../store/AuthStore";

const SuggestedUser = ({ suggesteduser }) => {
  const { handleFollowUser, isUpdating, isFollowing } = UseFollowUser(
    suggesteduser.uid
  );
  const { user } = useAuthStore();
  const onFollowUser = async () => {
    await handleFollowUser();
  };

  return (
    <>
      {
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
            <Box
              onClick={onFollowUser}
              fontSize={16}
              color={"blue.400"}
              cursor={"pointer"}
              // spinner={<BeatLoader size={8} color="white" />}
              size={"sm"}
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
          )}
        </Flex>
      }
    </>
  );
};

export default SuggestedUser;
