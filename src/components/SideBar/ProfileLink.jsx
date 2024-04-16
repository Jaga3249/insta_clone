import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import useAuthStore from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";
import useSliderState from "../../store/SliderState";

const ProfileLink = () => {
  const { isSelected, setSliderState } = useSliderState();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={{
          base: "center",
          sm: isSelected ? "center" : "start",
        }}
        gap={2}
        _hover={{ bg: "whiteAlpha.500" }}
        py={2}
        px={1}
        borderRadius={"5px"}
        cursor={"pointer"}
        position={"relative"}
        onClick={() => {
          navigate(user.username);
          setSliderState(false);
        }}
      >
        <Image
          src={user.profilePicUrl || "https://bit.ly/dan-abramov"}
          width={"30px"}
          h={"30px"}
          borderRadius={"full"}
        />
        <Box
          display={{
            base: "none",
            md: "block",
          }}
          position={isSelected ? "absolute" : "static"}
          left={isSelected ? "68px" : "0px"}
          transition={"left 0.8s ease-in-out"}
          transitionDelay={isSelected ? "0.2s" : "0.5s"}
        >
          Profile
        </Box>
      </Flex>
    </>
  );
};
export default ProfileLink;
