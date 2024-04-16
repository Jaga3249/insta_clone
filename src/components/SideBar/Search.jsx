import { Box, Flex, Tooltip } from "@chakra-ui/react";

import { SearchLogo } from "../../../public/Assets/icons/constants";
import useSliderState from "../../store/SliderState";

const Search = () => {
  const { isSelected, setSliderState, setCurrentSlider, currentSlider } =
    useSliderState();
  const handleChange = () => {
    setSliderState(!isSelected);
    setCurrentSlider("search");
  };

  return (
    <>
      <Tooltip
        label={"Search"}
        aria-label="A tooltip "
        ml={1}
        mt={2}
        display={{ base: "block", md: isSelected ? "block" : "none" }}
        placement="right-start"
        hasArrow
      >
        <Flex
          border={`${
            isSelected && currentSlider === "search" ? "1px solid white" : null
          }`}
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
          position={"relative"}
          cursor={"pointer"}
          onClick={handleChange}
        >
          <SearchLogo />
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
            Search
          </Box>
        </Flex>
      </Tooltip>
    </>
  );
};
export default Search;
