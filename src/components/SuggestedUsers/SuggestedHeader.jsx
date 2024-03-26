import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import profilepic from "../../../public/profilepic.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import UseLogOut from "../../Hooks/useLogout";
import { useState } from "react";
import useAuthStore from "../../store/AuthStore";

const SuggestedHeader = () => {
  const [loading, setLoading] = useState(false);
  const { handleLogout } = UseLogOut();

  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      px={2}
    >
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={2}
        cursor={"pointer"}
      >
        <Avatar
          src={user.profilePicUrl || profilepic}
          onClick={() => navigate(user.username)}
        />
        <Text mx={1}>{user.fullName}</Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        _hover={{ color: "blue.400" }}
        transition={"0.2s ease-in-out"}
        style={{ textDecoration: "none" }}
        onClick={() => handleLogout(setLoading)}
      >
        {loading ? "Loading...." : " Log out"}
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
