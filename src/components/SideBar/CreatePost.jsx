import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { CreatePostLogo } from "../../../public/Assets/icons/constants";
import useSliderState from "../../store/SliderState";

const CreatePost = () => {
  const { isSelected, setSliderState, setCurrentSlider, currentSlider } =
    useSliderState();

  return (
    <>
      <Tooltip
        label={"Create"}
        aria-label="A tooltip "
        ml={1}
        mt={2}
        display={{ base: "block", md: isSelected ? "block" : "none" }}
        placement="right-start"
        hasArrow
      >
        <Flex
          border={
            isSelected && currentSlider === "create"
              ? "1px solid white"
              : "null"
          }
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
            setSliderState(!isSelected);
            setCurrentSlider("create");
          }}
        >
          <CreatePostLogo />
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
            Create
          </Box>
        </Flex>
      </Tooltip>
    </>
  );
};
export default CreatePost;
