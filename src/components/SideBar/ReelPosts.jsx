import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { GiThreeLeaves } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import useSliderState from "../../store/SliderState";

const ReelPosts = () => {
  const { isSelected, setSliderState } = useSliderState();
  return (
    <div>
      <Tooltip
        label="Reels"
        aria-label="A tooltip "
        ml={1}
        mt={2}
        display={{ base: "block", md: isSelected ? "block" : "none" }}
        placement="right-start"
        hasArrow
      >
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return { backgroundColor: isActive ? "red" : "" };
          }}
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
            <GiThreeLeaves size={24} />

            <Text
              display={{
                base: "none",
                md: "block",

                sm: "block",
              }}
              position={isSelected ? "absolute" : "static"}
              left={isSelected ? "68px" : "0px"}
              transition={"left 0.8s ease-in-out"}
              transitionDelay={isSelected ? "0.2s" : "0.5s"}
            >
              Reel
            </Text>
          </Flex>
        </NavLink>
      </Tooltip>
    </div>
  );
};
export default ReelPosts;
