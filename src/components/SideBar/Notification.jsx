import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../../public/Assets/icons/constants";
import useSliderState from "../../store/SliderState";

const Notification = () => {
  const { isSelected, setSliderState } = useSliderState();
  return (
    <>
      <Tooltip
        label={"Notification"}
        aria-label="A tooltip "
        ml={1}
        mt={2}
        display={{ base: "block", md: isSelected ? "block" : "none" }}
        placement="right-start"
        hasArrow
      >
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
          onClick={() => setSliderState(false)}
        >
          <NotificationsLogo />
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
            Notification
          </Box>
        </Flex>
      </Tooltip>
    </>
  );
};
export default Notification;
