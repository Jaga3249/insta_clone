import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ avatar, userName, followers }) => {
  const [follow, setFollow] = useState(false);
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      px={2}
      py={2}
    >
      <Flex gap={2} alignItems={"center"}>
        <Avatar src={avatar} />
        <VStack spacing={0} alignItems={"start"}>
          <Box fontSize={14} color={"gray"}>
            {userName}
          </Box>
          <Box fontSize={14} color={"gray"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>

      <Box
        onClick={() => setFollow(!follow)}
        fontSize={16}
        color={"blue.400"}
        cursor={"pointer"}
      >
        {follow ? "Follow" : "unfollow"}
      </Box>
    </Flex>
  );
};

export default SuggestedUser;
