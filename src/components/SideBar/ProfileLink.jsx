import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import useAuthStore from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";

const ProfileLink = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={{ base: "center", sm: "start" }}
        gap={2}
        _hover={{ bg: "whiteAlpha.500" }}
        py={2}
        px={1}
        borderRadius={"5px"}
        cursor={"pointer"}
        onClick={() => navigate(user.username)}
      >
        {/* <RxAvatar size={25} /> */}
        <Image
          src={user.profilePicUrl || "https://bit.ly/dan-abramov"}
          width={"30px"}
          h={"30px"}
          borderRadius={"full"}
        />
        <Box display={{ base: "none", md: "block" }}>Profile</Box>
      </Flex>
    </>
  );
};
export default ProfileLink;
