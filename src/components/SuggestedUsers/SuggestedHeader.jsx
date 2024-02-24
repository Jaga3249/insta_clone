import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import profilepic from "../../../public/profilepic.png";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      px={2}
    >
      <Flex justifyContent={"flex-start"} alignItems={"center"} gap={2}>
        <Avatar src={profilepic} />
        <Text>Porammer_</Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        _hover={{ color: "blue.400" }}
        transition={"0.2s ease-in-out"}
        style={{ textDecoration: "none" }}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
