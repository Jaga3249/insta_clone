import {
  Box,
  Button,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import { Link } from "react-router-dom";
import UseGetSuggestedUsers from "../../Hooks/UseGetSuggestedUsers";
import { BiSolidHandDown } from "react-icons/bi";

const SuggestedUsers = () => {
  const { loading, suggestedUsers } = UseGetSuggestedUsers();
  if (loading) return null;

  return (
    <>
      <VStack>
        {/* suggestedUsre header */}
        <SuggestedHeader />
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"full"}
          px={2}
          py={2}
        >
          <Text color={"gray"}>Suggested for you</Text>
          <Text color={"blue.400"} cursor={"pointer"}>
            Seeall
          </Text>
        </Flex>

        {suggestedUsers.map((user) => (
          <SuggestedUser suggesteduser={user} key={user.id} />
        ))}

        <Box
          alignSelf={"start"}
          fontSize={16}
          display={"flex"}
          gap={2}
          px={2}
          color={"gray.400"}
          cursor={"pointer"}
          py={4}
        >
          @2024 Build By
          <Link
            href="https://github.com/Jaga3249?tab=repositories"
            target="_blank"
            color="blue.500"
          >
            As a Pogrammer
          </Link>
        </Box>
      </VStack>
    </>
  );
};

export default SuggestedUsers;
